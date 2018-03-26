---
layout: page
title: "Docker Swarm"
permalink: /laboratoare/open-source/docker-swarm/
layout: post
date: 2018-03-23 12:00:00
author: "Gabriel Paiu"
excerpt_separator: <!--more-->
highlight: true
---

## Pregatirea mediului de lucru

### Mașini virtuale

Pentru acest laborator vom avea nevoie de:
- Cel puțin două mașini virtuale (host-uri)
- Mașinile virutale configurate cu doi adaptori de rețea, unul de tip Host-Only si unul de tip NAT. Adaptorul de tip Host-Only va avea configurată o interfață ce va primi un IP fix, nu alocat dinamic prin DHCP.
- Docker instalat pe fiecare host

### Reguli de firewall

Pentru a putea avea un Swarm funcțional, vom avea nevoie de urmatoarele reguli de firewall adaugate:

```sh
firewall-cmd --add-port=2377/tcp --permanent
firewall-cmd --add-port=7946/tcp --permanent
firewall-cmd --add-port=7946/udp --permanent
firewall-cmd --add-port=4789/udp --permanent
```

## Scenariu

Vom considera următoarele mașini virtuale:

- node01.dev.lan : 192.168.56.101
- node02.dev.lan : 192.168.56.102
- node03.dev.lan : 192.168.56.103

Scopul este de a 

### Initializarea unui Swarm

Vom stabili node01 ca fiind Swarm Manager iar node02 și node03 vor fi workeri.

```sh
[root@node01 ~]# docker swarm init --advertise-addr 192.168.56.101
Swarm initialized: current node (q6o0r4vupkzqzyjwxabdrbx6h) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-63ytfj5muv4k5p3z35fnjqusc4n9a3vqokc1ky0q9cnc2r1zrv-2mcgxrnledmj1jjtcj059qnn5 192.168.56.101:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
```

```sh
[root@node02 ~]# docker swarm join --token SWMTKN-1-63ytfj5muv4k5p3z35fnjqusc4n9a3vqokc1ky0q9cnc2r1zrv-2mcgxrnledmj1jjtcj059qnn5 192.168.56.101:2377
This node joined a swarm as a worker.
```

```sh
[root@node03 ~]# docker swarm join --token SWMTKN-1-63ytfj5muv4k5p3z35fnjqusc4n9a3vqokc1ky0q9cnc2r1zrv-2mcgxrnledmj1jjtcj059qnn5 192.168.56.101:2377
This node joined a swarm as a worker.
```

Putem apoi confirma faptul că aceste comenzi s-au executat cu succes prin interogarea unui nod de tip manager pentru a afla detalii despre nodurile din Swarm:

```sh
[root@node01 ~]# docker node ls
ID                            HOSTNAME            STATUS              AVAILABILITY        MANAGER STATUS
q6o0r4vupkzqzyjwxabdrbx6h *   node01.dev.lan      Ready               Active              Leader
gbki1q5snmz6e8dfy2ctvdwkb     node02.dev.lan      Ready               Active
rqk5z9owue94m50mow7uhs5wr     node03.dev.lan      Ready               Active
```

## Initializarea unui registru

Deoarece ne vom confrunta cu nevoia depozitării imaginilor de Docker într-o locație accesibilă de către toți membrii Swarm-ului, vom avea nevoie de un registru în cadrul infrastructurii noastre. Nu tot timpul vom simți necesitatea DockerHub, pentru că în majoritatea cazurilor, nu vom vrea ca imaginile noastre de Docker să fie disponibile și altor persoane, deoarece pot conține date confidențiale, care nu trebuie să părăsească infrastructura.

### Considerente
- Docker Registry este disponibil doar în forma unui container ce va fi executat pe o mașină virtuală, fie ea parte din Swarm, fie nu.
- Atunci când vom lansa în execuție un serviciu de tip Docker Registry, va trebui să montam un volum unde se vor păstra imaginile de Docker pentru a putea fi refolosite după repornirea serviciului.
- Pentru a simplifica lucrurile, vom avea grija de a lansa containerul Docker Registry de fiecare dată pe același nod, de unde vom monta volumul pe care îl va folosi la stocarea imaginilor. Pentru asta, vom folosi un label care va fi alocat nodului care va găzdui containerul de registru:

```sh
[root@node01 compose]# docker node update --label-add registry=true node01.dev.lan
node01.dev.lan
```

### Compose file

```sh
[root@node01 compose]# cat registry.yml
version: '3'

services:
  server:
    image: registry:latest
    ports:
      - 5000:5000
    volumes:
      - /docker/registry-data:/var/lib/registry
    deploy:
      replicas: 1
      placement:
        constraints:
          - node.labels.registry == true
```
```sh
[root@node01 compose]# docker stack deploy -c registry.yml registry
Creating network registry_default
Creating service registry_server
[root@node01 compose]#
```

### Pasi aditionali

Deoarece nu ne vom axa pe capitolul de securitate, va trebui sa configurăm utilitarul de Docker astfel încât să ne permită accesarea unui registru într-un mod ”insecure”. Astfel, vom crea fișierul /etc/docker/daemon.json cu următoarea configurație:

```sh
[root@node03 ~]# cat /etc/docker/daemon.json
{
  "insecure-registries" : ["node01.dev.lan:5000"]
}
```

Acest pas va trebui repetat pe fiecare nod din infrastructuă, după care procesul de docker va trebui repornit:

```
systemctl restart docker
```

### Verificare

Stack-ul a fost creat cu succes:
```sh
[root@node01 compose]# docker stack ls
NAME                SERVICES
registry            1
```

Stack-ul conține serviciul ”server” cu numărul de containere la care ne așteptăm:
```sh
[root@node01 compose]# docker stack services registry
ID                  NAME                MODE                REPLICAS            IMAGE               PORTS
saota9u8yove        registry_server     replicated          1/1                 registry:latest     *:5000->5000/tcp
```

Inspectarea serviciului:
```sh
[root@node01 compose]# docker service ps registry_server
ID                  NAME                IMAGE               NODE                DESIRED STATE       CURRENT STATE           ERROR               PORTS
q1mh1syk49e0        registry_server.1   registry:latest     node01.dev.lan      Running             Running 3 minutes ago
```

Registrul este accesibil:

```sh
[root@node02 ~]# curl -v node01.dev.lan:5000
* About to connect() to node01.dev.lan port 5000 (#0)
*   Trying 192.168.56.101...
* Connected to node01.dev.lan (192.168.56.101) port 5000 (#0)
> GET / HTTP/1.1
> User-Agent: curl/7.29.0
> Host: node01.dev.lan:5000
> Accept: */*
>
< HTTP/1.1 200 OK
< Cache-Control: no-cache
< Date: Sat, 24 Mar 2018 09:58:43 GMT
< Content-Length: 0
< Content-Type: text/plain; charset=utf-8
<
* Connection #0 to host node01.dev.lan left intact
```

## Orchestrare

### Cerinte

Pentru a ilustra orchestrarea folosind compose file și stack-uri, am ales urmatorul scenariu:
- un serviciu care va filtra conexiunile către Swarm și va trimite mai departe către serviciile din spate. Acest serviciu va executa utilitarul HaProxy (imaginea haproxy:latest)
- un serviciu care va găzdui o aplicație Java ce va rula sub Tomcat (imaginea tomcat:latest extinsă)
- un serviciu care va oferi informații despre Swarm (imaginea dockersamples/visualizer:latest)
- ilustrarea conceptului de ”rolling updates”

### Considerente

În implementarea acestui scenariu trebuie să luăm în calcul urmatoarele:
- va trebui să extindem imaginea tomcat:latest la care vom atașa o aplicație Java ”hello-world”
- aplicația Visualizer va trebui sa ruleze pe un nod de tip manager și va trebui sa poată interacționa cu Docker API prin intermediul socketului expus de serviciul de Docker însuși
- aplicația HaProxy va primi un fișier de configurare printr-un volum montat. Așadar, pentru simplitatea lucrurilor, ne vom asigura că instanța HaPorxy va porni tot timpul pe același nod pentru a avea disponibil fișierul de configurare pe care îl vom servi

### Extinderea imaginii tomcat:latest

Vom crea o imagine nouă pornind de la tomcat:latest la care vom atașa aplicația noastră Java. După aceasta, vom incărca imaginea nou creată în registrul lansat la pasurile anterioare.

```sh
[root@node01 app]# ll
total 8
-rw-r--r-- 1 root root   82 Mar 24 11:52 Dockerfile
-rw-r--r-- 1 root root 2415 Mar 20 20:57 hello-world.war
[root@node01 app]# cat Dockerfile
FROM tomcat:latest

ADD hello-world.war /usr/local/tomcat/webapps/hello-world.war
[root@node01 app]# docker build -t node01.dev.lan:5000/app:1.0 .
Sending build context to Docker daemon   5.12kB
Step 1/2 : FROM tomcat:latest
 ---> 516082cd94fa
Step 2/2 : ADD hello-world.war /usr/local/tomcat/webapps/hello-world.war
 ---> b1ffe146773e
Successfully built b1ffe146773e
Successfully tagged node01.dev.lan:5000/app:1.0
[root@node01 app]# docker push node01.dev.lan:5000/app:1.0
The push refers to repository [node01.dev.lan:5000/app]
1d8ccfca7cd8: Pushed
e0bfc9782266: Layer already exists
38db8a65762c: Layer already exists
6c76c2c59423: Layer already exists
5c64efab6b1e: Layer already exists
148268bf14be: Layer already exists
6a47dae912f7: Layer already exists
00439e7d6354: Layer already exists
a1a8b7f7efac: Layer already exists
341d865c1c22: Layer already exists
61c06e07759a: Layer already exists
bcbe43405751: Layer already exists
e1df5dc88d2c: Layer already exists
1.0: digest: sha256:0c948a9caecbec4685c623c77fcb74c78307e8c175d4353e43ad8afc117c3391 size: 3044
[root@node01 app]#
```

În acest moment, imaginea noastră node01.dev.lan:5000/app:1.0 va fi disponibilă pentru toate nodurile din Swarm.

### Compose file

```
[root@node01 compose]# cat app.yml
version: '3.4'

services:
  server:
    image: node01.dev.lan:5000/app:1.0
    networks:
      - backend
    deploy:
      replicas: 3
      placement:
        constraints:
          - node.role == worker
      update_config:
        parallelism: 1
        delay: 15s
        order: stop-first
  visualizer:
    image: dockersamples/visualizer
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    networks:
      - visualizer
    deploy:
      replicas: 1
      placement:
        constraints:
          - node.role == manager
  proxy:
    image: haproxy:latest
    ports:
      - 80:80
    volumes:
      - /docker/volumes/haproxy/haproxy.cfg:/usr/local/etc/haproxy/haproxy.cfg
    networks:
      - frontend
      - backend
      - visualizer
    deploy:
      replicas: 1
      placement:
        constraints:
          - node.role == manager
    depends_on:
      - server
      - visualizer

networks:
  frontend:
    driver: overlay
  backend:
    driver: overlay
  visualizer:
    driver: overlay
```

```
[root@node01 compose]# docker stack deploy -c app.yml app
Creating network app_visualizer
Creating network app_backend
Creating network app_frontend
Creating service app_visualizer
Creating service app_proxy
Creating service app_server
[root@node01 compose]#
```

### Fisierul de configurare haproxy.cfg

```
[root@node01 compose]# cat /docker/volumes/haproxy/haproxy.cfg
global
  log 127.0.0.1 local0
  log 127.0.0.1 local1 notice
  daemon

defaults
  log global
  mode http
  option httplog
  option dontlognull
  timeout connect 5000ms
  timeout client 50000ms
  timeout server 50000ms

frontend http_in
  bind *:80
  acl for_app path_sub -i hello-world
  use_backend app if for_app
  default_backend visualizer

backend app
  server app app_server:8080

backend visualizer
  server visualizer app_visualizer:8080
```

### Verificare

Stack-ul conține numărul așteptat de servicii:

```sh
[root@node01 compose]# docker stack ls
NAME                SERVICES
app                 3
registry            1
[root@node01 compose]# docker stack services app
ID                  NAME                MODE                REPLICAS            IMAGE                             PORTS
asxvfmk4q3ht        app_visualizer      replicated          1/1                 dockersamples/visualizer:latest
iskhkpx8o4il        app_server          replicated          3/3                 node01.dev.lan:5000/app:1.4
uf1vg37rs6ni        app_proxy           replicated          1/1                 haproxy:latest                    *:80->80/tcp
```

Accesarea de pe host a oricărui IP atașat la interfața de rețea Host-Only fără a specifica o resursă anume va trebui să apeleze Visualizer, iar accesarea resursei /hello-world va trebui să acceseze aplicația Java.

```sh
[gpaiu@gondor ~]# curl -s 192.168.56.101 | grep -i visualizer
  <title>Visualizer</title>
```

```
[gpaiu@gondor ~]# curl 192.168.56.101/hello-world/
<html>
<head>
<title>Hello World!</title>
</head>
<body>
	<h1>Hello World!</h1>
	<p>
		It is now
		Sat Mar 24 10:09:07 UTC 2018</p>
	<p>
		You are coming from
		10.0.2.11</p>
</body>
[gpaiu@gondor ~]#
```

### Rolling update

În situația în care există o imagine actualizată a aplicației (i.e app:1.1), vom avea posibilitatea de a efectua actualizări în mers, fară existența unui timp în care aplicația nu va funcționa, și totodată ne va oferi și posibilitatea unui rollback. Acest lucru este făcut de ”docker stack deploy” implicit, și în acleași timp, putem și specifica politica modului de actualizare prin hash-ul ”update_config” în Compose File.

```shell
[root@node01 compose]# grep "app:1" app.yml
    image: node01.dev.lan:5000/app:1.1
```

```shell
[root@node01 compose]# docker stack deploy -c app.yml app
Updating service app_visualizer (id: h0ygkbes3uchxjt30i027b0v7)
Updating service app_proxy (id: 397lcl3puzbewtkj6qzlxyrly)
Updating service app_server (id: oow11ls6c425r9m7k5n0yi9kt)
```

```shell
[root@node01 compose]# docker service ps app_server
ID                  NAME                IMAGE                         NODE                DESIRED STATE       CURRENT STATE             ERROR               PORTS
yzeiw0c3lrdt        app_server.1        node01.dev.lan:5000/app:1.1   node02.dev.lan      Running             Running 41 seconds ago
6rc41hxq1p72         \_ app_server.1    node01.dev.lan:5000/app:1.0   node03.dev.lan      Shutdown            Shutdown 42 seconds ago
x2wc6dvbfvj8        app_server.2        node01.dev.lan:5000/app:1.1   node02.dev.lan      Running             Running 3 seconds ago
yz8qnvcgnts7         \_ app_server.2    node01.dev.lan:5000/app:1.0   node02.dev.lan      Shutdown            Shutdown 3 seconds ago
j3114qxo74sd        app_server.3        node01.dev.lan:5000/app:1.1   node03.dev.lan      Running             Running 22 seconds ago
9s3dk4lgyx6j         \_ app_server.3    node01.dev.lan:5000/app:1.0   node03.dev.lan      Shutdown            Shutdown 23 seconds ago
```
