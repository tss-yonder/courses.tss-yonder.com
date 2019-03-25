---
title: "Multistage builds"
permalink: /open-source/laboratoare/multistage_build/
group: 'open-source'
layout: post
color: pink
icon: fab fa-osi
date: 2019-03-25 10:00:00
author: "Alexandru Asofroniei"
excerpt_separator: <!--more-->
highlight: true
---

## Despre multistage build

In universul Docker, o metoda foarte simpla si utila de a optimiza imaginile generate si de a organiza un Dockerfile este multistage build-ul.
Multistage build iti ofera posibilitatea sa creezi o imagine intermediara, unde executi operatiuni care iti compileaza codul tau. Dupa ce codul a fost compilat il poti copia in imaginea principala. Toate aceste operatiuni sunt descrise intr-un singur Dockerfile.

## Crearea unui Dockerfile 

Pentru a ne putea folosi de functionalitatea de multi-stage build, trebuie sa avem cel putin doua etape. O etapa incepe tot timpul cu directiva `FROM` si poate avea si un nume, care este precizat folosind `as nume`. Daca nu precizam un nume, atunci cand vrem sa referentiem o etapa ii vom folosi index. Prima etapa are indexul `0`, acesta crescand cu o unitate pentru fiecare etapa care urmeaza.

Un Dockerfile cu doua etape poate sa arate in felul urmator:

```docker
FROM mcr.microsoft.com/dotnet/core/sdk:1.1 as builder

RUN apt-get update && apt-get install git
RUN mkdir /root/.ssh && chmod 700 /root/.ssh
COPY id_rsa /root/.ssh/
RUN chmod 400 /root/.ssh/id_rsa
RUN ssh-keyscan github.com >> /root/.ssh/known_hosts
WORKDIR /opt
RUN git clone git@github.com:aso930/hl2ep3-dotnet.git
WORKDIR /opt/hl2ep3-dotnet
RUN dotnet restore
RUN dotnet publish -c Release -o hl2ep3



FROM microsoft/dotnet:1.1.2-runtime

RUN mkdir -p /opt/hl2ep3/StoryMarkdown
COPY --from=builder /opt/hl2ep3-dotnet/hl3ep2/hl2ep3 /opt/hl2ep3
WORKDIR /opt/hl2ep3/
COPY Epistle3_Corrected.md StoryMarkdown/Epistle3_Corrected.md

ENTRYPOINT ["dotnet", "hl3ep2.dll"]
```

Analizand fisierul de mai sus observam ca avem doua directive `FROM`. 

Prima directiva `FROM` defineste imaginea in care va fi compilata aplicatia, ea a primit pseudonimul `builder`.

A doua directiva `FROM` marcheaza startul imaginii noastre finale.

Legatura dintre cele doua imagini poate fi observata in urmatorul `COPY`:
```docker
COPY --from=builder /opt/hl2ep3-dotnet/hl3ep2/hl2ep3 /opt/hl2ep3
```
In directiva de mai sus vom copia aplicatia noastra compilata din prima imagine in imaginea curenta. Tineti minte ca primul path din `COPY` se regaseste in imaginea `builder`, iar al doilea face referire la imaginea curenta. Observam si `--from=builder` care identifica imaginea sursa.

Exemplul de mai sus demonstreaza cel mai bine avantajul oferit de multistage builds. Pentru a putea compila aplicatia dotnet core de mai sus, avem nevoie de sdk. Pentru a o putea rula folosim runtime. Daca toti pasii de mai sus erau continuti intr-o singura imagine, am fi fost obligati sa folosim sdk-ul pentru rularea aplicatiei. Acest lucru ar fi dus la o imagine mai mare, cu mai multe nivele si neoptima pentru tipul acesta de aplicatie.

Putem acum sa facem build la imagine exact cum am face pentru o imagine simpla:

```bash
docker build -t hl2ep3 .
```

## Exercitiu

Creati o imagine folosind multistage build pentru aplicatia de aici: [simple-go-app](https://gist.github.com/aso930/52b1e7677e4e2a60e20432aa226a9b3e)

Pasii pentru a putea compila si rula aplicatia sunt urmatorii:
 - Folositi o imagine oficiala cu Golang
 - Descarcati dependintele folosind: `go get github.com/gorilla/mux`
 - Compilati aplicatia folosind: `go build main.go`


## Referinte

1. [Directive Dockerfile](https://docs.docker.com/engine/reference/builder)
2. [Multistage builds](https://docs.docker.com/develop/develop-images/multistage-build/)
