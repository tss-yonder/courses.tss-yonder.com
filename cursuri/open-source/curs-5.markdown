---
title: "Curs 5"
permalink: /cursuri/open-source/curs-5/
layout: shower
date: 2018-04-02 12:00:00
author: ""
excerpt_separator: <!--more-->
style: |

    #Cover h2 {
        margin:30px 0 0;
        color:#FFF;
        text-align:center;
        font-size:70px;
        }
    #Cover p {
        margin:10px 0 0;
        text-align:center;
        color:#FFF;
        font-style:italic;
        font-size:20px;
        }
        #Cover p a {
            color:#FFF;
            }
    #Picture h2 {
        color:#FFF;
        }
    #SeeMore h2 {
        font-size:100px
        }
    img {
        width:0.72em;
        height:0.72em;
        }
---

# Metodologii de lucru în mediul Open-Source
![](https://upload.wikimedia.org/wikipedia/commons/1/1d/BlankMap-World-WWII.PNG)

## Cuprins
- Practici de dezvolare software <br>
    Continuous integration <br>
    Continuous delivery/deployment <br>
- Gestiunea configurărilor <br>
    Puppet, Chef, Ansible, Salt Stack, CF Engine <br>
- Configurarea environment-ului <br>
    Vagrant <br>
    Docker <br>
- Recapitulare



## Practici de dezvoltare software
- CI  și CD sunt 2 acronime ce sunt folosite când discutăm despre practici de dezvoltare moderne.
- CI reprezintă Continuous Integration, iar CD poate reprezenta Continuous Delivery, respectiv Continuous Deployment.
- Deși cele 2 au multe similarități, vom observa că există o diferență ce poate avea impact major la nivelul afacerii.

## Continuous integration
- Reprezintă practica de dezvoltare ce presupune ca fiecare dezvoltator să integreze codul într-un repository partajat cât mai des posibil.
- Se pot rula o serie de teste pentru pachetele automat construite (automated builds) ce premit echipelor să detecteze probleme mai rapid.
- Integrarea regulată permite detecția erorilor și localizarea lor în cod într-un interval de timp scurt.

## Continuous integration
- Reprezintă practica de dezvoltare ce presupune ca fiecare dezvoltator să integreze codul într-un repository partajat cât mai des posibil.
- Se pot rula o serie de teste pentru pachetele automat construite (automated builds) ce premit echipelor să detecteze probleme mai rapid.
- Integrarea regulată permite detecția erorilor și localizarea lor în cod într-un interval de timp scurt.

## Continuous delivery
- Continuous delivery (CD) este o abordare specifică dezvoltării software în care echipele produc software în cicluri scurte, asigurând că acel produs poate fi lansat, in mod fiabil, în orice moment.
- Scopul principal este să produci, să testezi şi sa livrezi software mai rapid si mult mai frecvent.
- Un focus mare este pe asigurarea calităţii în urma schimbărilor făcute în codul sursă, prin diverse sisteme de testare (integration tests, acceptance tests, performance tests, etc.)

## Continuous delivery
![twitter_cd](/{{ "assets/images/courses/docker_61.png" | prepend: site.baseurl }})

## Continuous deployment
- Reprezintă practica de dezvoltare ce presupune ca toate etapele de dezvoltare, inclusiv aducerea ultimei versiuni a produsul software în producție, la clienții finali, să fie automatizată.
- NU există intervenție umană, iar deploy-ul poate fi prevenit doar prin eșuarea unui test.

## Continuous integration/delivery/deployment
Simplificat, Continuous Intergration face parte și din Continuous Delivery și din Continuous Deployment, iar Continuous Deployment este asemănător cu Continuous Delivery, cu excepția că release-urile sunt automatizate.

## Continuous integration/delivery/deployment
![ci_cd](/{{ "assets/images/courses/docker_91.png" | prepend: site.baseurl }})

## Gestiunea configurărilor
- Dacă ai mai multe servere şi vei dori să faci unele acţiuni pe acele servere, poate însemna că trebuie sa te conectezi la fiecare server şi sa faci acele acţiuni, pe rând. Poate fi vorba de acţiuni simple, precum repornirea acelor maşini sau verificare uptimeului serverelor. Sau poate e nevoie de o acţiune mai complicată, precum o actualizarea software şi o configurare specifică noii versiuni ale aplicaţiei. 
- Sau poate e vorba de adaugarea unui utilizator nou pe toate serverele disponibile.

## Gestiunea configurărilor
- Cât de dificil ar fi aceste acţiuni repetitive, dacă e nevoie să le faci pe 10, sau 100 de servere ? Ar fi destul de dificil şi neplăcut sa faci aceste acţiuni repetitive pe un număr mare de servere. Atunci când e vorba de acţiuni repeptitive mai intervine si factorul de risc al erorii umane.
- Idea din spate la managementul configurărilor este să poţi defini starea configurării prin cod. Acel cod poate fi întreţinut printr-un sistem VCS (git) astfel încât schimbările să poată fi disponibile pentru mai mulţi colaboratori, să fie un istoric prin care se poate da revert la o schimbare.
- O asemenea soluţie se poate numi infrastructură ca şi cod (infrastructure as code)

## Gestiunea configurărilor
- AWS S3 outage
- “An authorized S3 team member using an established playbook executed a command which was intended to remove a small number of servers for one of the S3 subsystems that is used by the S3 billing process. Unfortunately, one of the inputs to the command was entered incorrectly and a larger set of servers was removed than intended. The servers that were inadvertently removed supported two other S3 subsystems.  One of these subsystems, the index subsystem, manages the metadata and location information of all S3 objects in the region”

https://aws.amazon.com/message/41926/

## Gestiunea configurărilor
- Vom discuta despre mai multe tooluri care adresează următoarele taskuri: <br>
Orchestrare <br>
Servirea automată <br>
Automatizarea configurării <br>
Vizualizare şi raportare <br>
Managementul codului <br>
Managementul maşinii <br>

## Gestiunea configurărilor - Puppet
- Soluţie open source construită cu Ruby
- Puppet foloseşte o arhitectură agent/master —agenţii administrează noduri şi cer informaţii de la serverul master astfel încât să facă schimbările necesare
- Puppet foloseşte un limbaj specific, similar cu Ruby şi cu o structură de tip JSON

## Gestiunea configurărilor - Puppet
![puppet](/{{ "assets/images/courses/docker_161.jpg" | prepend: site.baseurl }})

## Gestiunea configurărilor - Chef
- Chef este un tool open source, bazat pe Ruby
- Chef a fost tool adoptat de Facebook, care a contribuit la dezoltarea acestuia şi la maturizarea produsului
- Chef foloseşte fişiere care conţin cod cu o structura specifică şi se numesc „recipes”

## Gestiunea configurărilor - Chef
![chef](/{{ "assets/images/courses/docker_181.png" | prepend: site.baseurl }})

## Gestiunea configurărilor - Ansible
- Ansible a fost dezvoltat pentru a simplifica acţiuni complexe de orchestrare şi configurare. 
- Este scris în Python şi ne dă posibilitatea să descriem acţiuni sub forma de scripturi în structură YAML
- Nu necesită instalarea unui agent sau un server master – conexiunea se face prin SSH către destinaţiile specificate
- Foloseste Playbooks – limbajul specific Ansible de configurare, deployment si orchestrare.

## Gestiunea configurărilor- Ansible
![ansible](/{{ "assets/images/courses/docker_201.png" | prepend: site.baseurl }})

## Gestiunea configurărilor – Salt Stack
- Salt este un tool scris în Python care foloseşte un sistem „push” pentru a trimite comenzi prin protocolul SSH.
- Un singur server master poate administra mai multe servere de tip master, care pot interacţiona şi controla mai mulţi agenţi (minions).
- Platfoma foloseste o arhitectura master-agent dar oferă posibilitatea unei arhitecturi decentralizate.
- Similar cu Ansible, foloseşte fişiere de cod cu o structură YAML

## Gestiunea configurărilor – Salt Stack
![salt](/{{ "assets/images/courses/docker_221.png" | prepend: site.baseurl }})

## Gestiunea configurărilor – CF Engine
- CFEngine a început ca un proiect open source
- CFEngine este unul din tooluri mai vechi de CM
- CFEngine este bazat pe limbajul C
- Pentru că acesta este bazat pe C, este compatibil cu o gama mai mare de sisteme de operare si dispozitive embedded

## Gestiunea configurărilor – CF Engine
![cfengine](/{{ "assets/images/courses/docker_241.png" | prepend: site.baseurl }})

## Environment configuration - Vagrant
- Vagrant este un tool open source, dezvoltat în Ruby
- Acesta permite configurarea, distribuţia şi virtualizarea mediilor de lucru (development environment)
- Vagrant îţi dă posibilitatea să izolezi mediul tău de devoltare faţă de sistemul de operare pe care lucrezi şi te ajută să defineşti caracteristicile mediului de dezvoltare astfel încăt să poată fi replicat şi distribuit uşor

## Environment configuration - Vagrant
- Vagrant are nevoie de un virtualizator (VirtualBox, HyperV, VMware); acesta are rol de layer între configurarea descrisă Vagrantfile şi virtualizator

## Environment configuration - Vagrant
![vagrant_file](/{{ "assets/images/courses/docker_261.png" | prepend: site.baseurl }})

## Docker
- Permite separarea aplicațiilor de infrastructură pentru a livra produse software într-un interval de timp scurt.
- Este o platformă open ce permite: <br>
Dezvoltarea (development) <br>
Transportarea (shipping, deploy) <br>
Rularea (run) <br>
aplicațiilor cu containere Linux.

## Docker
- Profitând de avantajele metodologiilor ce sunt oferite de acestă platformă, se poate reduce semnificativ timpul între dezvoltarea produsului software și rularea sa în producție (la clienții finali)

## Docker
- Engine:
- Aplicație client-server cu 3 componente principale:
    - Un server implementat ca un proces daemon (serviciu) ce gestionează obiecte docker precum: imagini, containere, rețele – dockerd
    - REST API ce specifică cum se poate interacționa cu serverul
    - CLI (command line interface) - clientul ce utilizează API-ul pentru interacțiunea cu daemonul prin scripturi sau comenzi CLI - docker


## Versionarea produselor software
- Putem împărți acest topic în 2 categorii:
- Versionarea publică: 
- Simplă și memorabilă (contra-exemplu: Office 10.6.6527.14789)
- Windows 7
- iOS10
- Office 2013
- Versionare privată:
- Folosită pentru a identifica unic o versiune specifică a unui produs software

## Docker
- Objects
- Imagini <br>
O imagine reprezintă un template read-only cu instrucțiuni pentru a crea un container docker. <br>
De obicei imaginile sunt bazate pe alte imagini. Ex. O imagine poate fi bazată pe ubuntu, dar instalează un web server (ex. Apache) și aplicația proprie împreună cu fișierele de configurare

## Docker
- Containere <br>
Un container reprezintă o instanță runnable a unei imagini. <br>
Folosind API-ul (sau CLI) se pot crea, porni, opri, muta sau șterge containere. <br>
Altele: volumes, plugins

## Docker
![docker1](/{{ "assets/images/courses/docker_301.jpg" | prepend: site.baseurl }})

## Docker
- Services
- Acestea permit scalarea containerelor peste daemoni Docker multipli, ce pot „lucra împreună” ca un swarm cu manageri și workeri.
- Fiecare membru a unui swarm este un daemon Docker și toți utilizează Docker API pentru comunicare.

## Docker
- Un serviciu permite definirea stării dorite, precum numărul replicilor unui serviciu care trebuie să fie accesibil în orice moment.
- Implicit serviciile sunt load-balanced
Pentru utilizator un serviciu Docker apare ca o singură aplicație

## Docker
![docker2](/{{ "assets/images/courses/docker_321.png" | prepend: site.baseurl }})

## Docker
- Docker registry
- Reprezintă locația imaginilor Docker.
- Docker Hub și Docker Cloud sunt regiștri publici, Docker Hub fiind cel configurat implicit pentru a fi utilizat
- Comenzi utile:  <br>
docker pull, docker run – imaginile necesare sunt preluate din registry
docker push – imaginile sunt transmise către registry

## Docker
![docker](/{{ "assets/images/courses/docker_331.png" | prepend: site.baseurl }})

## Docker
- În trecut, dacă era necesar dezvoltarea unei aplicații python, primul obiectiv era să fie instalat un runtime python pe mașină.
Asta presupune ca environment-ul mașinii, pe care rulează aplicația, să fie la fel ca cea din producție și să conțină toate dependințele.

## Docker
- Cu Docker se poate descărca o imagine cu un runtime python preinstalat, pe care să fie pusă aplicația python, împreună cu toate fișierele de configurare și alte dependințe. Astfel se creează un mod portabil de a distribui noua aplicație creeată.
- Aceste imagini portabile sunt definite printr-un Dockerfile.

## Docker
- Dockerfile
- Definește ce se petrece în interiorul environmentului.
- Accesul la resurse precum interfețe de rețea sau disk drives sunt virtualizate în interiorul environmentului și sunt izolate de restul sistemului, ceea ce presupune că porturile, de exemplu, trebuie mapate către exterior.
- Build-ul acestei aplicații se comportă la fel, oriunde ar rula.

## Docker
![docker3](/{{ "assets/images/courses/docker_351.png" | prepend: site.baseurl }})

## Docker
![docker4](/{{ "assets/images/courses/docker_352.png" | prepend: site.baseurl }})

## Docker
- Build <br>
docker build –t <name> <location> - creează o imagine Docker, opțiunea -t permite asocierea unei denumiri. <br> 
Ex name = friendlyhello <br>
- Image location <br>
docker image ls – registrul de imagini Docker local <br>

## Docker
- Run <br>
Docker run –p 4000:80 <name> – rularea aplicației, cu port mașinii (4000) mapat la portul aplicației (80)

## Continuous Integration Docker/Jenkins/GitHub
![ci_cd_git_jenkins](/{{ "assets/images/courses/docker_371.png" | prepend: site.baseurl }})

## Referințe
https://www.atlassian.com/continuous-delivery/ci-vs-ci-vs-cd <br>
https://docs.puppet.com/ <br>
https://docs.chef.io/ <br>
http://docs.ansible.com/ <br>
https://docs.saltstack.com/en/latest/ <br>
https://docs.cfengine.com/ <br>
https://www.vagrantup.com/docs/ <br>
https://docs.docker.com/engine/docker-overview/ <br>
https://docs.docker.com/get-started/part2/#build-the-app <br>
https://www.thoughtworks.com/continuous-integration <br>

## Mulțumim!
