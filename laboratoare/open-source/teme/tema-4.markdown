---
title: "Tema - GitLab CI"
permalink: /laboratoare/open-source/teme/tema-4/
group: "laboratoare.opensource"
layout: post
color: blue
icon: fas fa-gitlab
highlight: true
author: "Andrei Sahaidac"
date: 2018-04-24 12:00:00
---

## Subiect
Să se construiască un flow complet de Integrare Continuă (Continuous Integration).

Scopul acestei teme este să integrăm conceptele de containerizare, cu versionarea de cod şi analiză de cod împreună cu conceptele de testare, pentru a dezvolta un sistem de CI.

Aplicaţia software ce va servici ca şi exemplu pentru aplicarea conceptelor de CI este la libera alegere (aplicaţie proprie sau aplicaţie dummy).

Testele software trebuie să le creaţi în funcţie de aplicaţia aleasă şi tipul de test.

## Cerinţe
1. Este necesar un artefact software - proiect propriu sau aplicaţie mock/dummy
2. Un container Docker care sa ruleze GitLab - proiect cu aplicatia mentionata anterior
3. Este necesar creaţi un test unitar pentru aplicaţia folosită
4. Este necesară implementarea de analiză statică pe cod (de folosit un linter)

5. Un container cu un Gitlab runner (care sa aibă acces la socketul de docker de pe host) - necesar pentru acces la construirea imaginilor docker - GitLab Runner va lua aplicaţia din repositoryul aplicaţiei din GitLab - alternativ se poate folosi Jenkins sau Travis-CI
6. Se vor aplica, în mod automat, cele 2 teste mentionaţe anterior pe proiectul aplicaţiei din GitLab

7. Un container cu Docker Registry - pentru stocarea imaginilor (poate fi folosit GitLab Registry) - aici vom stoca rezultatul acţiunii anterioare de build

## Pentru puncte bonus
8. Este necesar să creaţi un test funcţional, pe imaginea creată şi stocată in Docker Registry, şi o prezentare a logicii testului
9. Este necesar să creaţi un test de regresie, pe imaginea creată şi stocata in Docker Registry, şi o prezentare a logicii testului


Tema va fi evaluata pe fiecare necesitate mentionata mai sus.
Termen limita - laborator Saptamana 10