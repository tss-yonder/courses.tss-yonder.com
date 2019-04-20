---
title: "Tema - GitLab CI"
permalink: /open-source/teme/tema-3/
group: "open-source"
layout: post
color: blue
icon: fas fa-gitlab
highlight: true
author: "Andrei Sahaidac"
date: 2019-04-08 12:00:00
---

## Subiect
Scopul acestei teme este să integrăm conceptele de containerizare, cu versionarea de cod împreună cu conceptele de Docker swarm.

## Cerinţe


1. Un container Docker care să ruleze GitLab.  

2. Un container separat cu un Gitlab runner (care sa aibă acces la socketul de docker de pe host) - necesar pentru acces la construirea imaginilor docker - GitLab Runner va lua aplicaţia din repositoryul aplicaţiei din GitLab - alternativ se poate folosi Jenkins sau Travis-CI  

3. Un container cu Docker Registry - pentru stocarea imaginilor (poate fi folosit GitLab Registry) - aici vom stoca rezultatul acţiunii anterioare de build  

4. Configurarea unui Docker Swarm care sa ruleze containerele mentionate la punctele anterioare (să se facă serviciile care vor rula GitLab server şi GitLab runner)  


Tema va fi evaluata pe fiecare necesitate mentionata mai sus.    
Se poate lucra şi prezenta tema în echipe de câte 2 persoane maxim, cu menţiunea ca fiecare membru să îşi prezinte contribuţia.  
Termen limita - laborator Saptamana 11!
