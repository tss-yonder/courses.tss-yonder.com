---
title: "Proiect MLMOS"
permalink: /open-source/laboratoare/proiect_mlmos/
group: 'open-source'
layout: post
color: pink
icon: fab fa-osi
date: 2018-05-02 12:00:00
author: "Andrei Sahaidac"
excerpt_separator: <!--more-->
highlight: true
---

## Cerinte proiect MLMOS

Să se pregătească un mediu funcţional în care să integraţi o aplicaţie proprie, versionată şi administrată printr-un tool de VCS (GitLab). 
Aplicaţia ar trebui să fie rulată într-un container Docker pe o infrastructură Docker Swarm.
Cerinţe:
- să se implementeze o instanţă de GitLab, rulată într-un container Docker
- să se implementeze un Docker Swarm
- să se creeze o metodă automată prin care se poate face build, release şi deploy al aplicaţie voastre, în mod automat din GiLab spre Docker Swarm
- să se creeze o logică de separare environment de dezvoltare şi producţie in Docker Swarm, în funcţie de branch-ul pe care lucrăm în GitLab şi destinaţia în care vrem să facem release (vrem să putem controla locaţia din swarm care va rula aplicaţia, în funcţie de branch-ul de pe care s-a făcut release)


Sugestii:
- Puteţi folosi rezultatul obţinut de la Tema 4 - implementare CI
- Pentru clarificări sau întrebări, contactaţi pe email colaboratorii MLMOS - [detalii contact](https://courses.tss-yonder.com/echipa/)

Vă recomandăm să folosiţi paginile de documentaţie ale produselor cu care veţi lucra !
