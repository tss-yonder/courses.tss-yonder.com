---
title: "Tema - Docker"
permalink: /laboratoare/open-source/teme/tema-3
group: "laboratoare.opensource"
layout: post
color: blue
icon: fas fa-laptop
highlight: true
author: "Gabriel Paiu"
date: 2018-03-23 12:00:00
---

## Resurse necesare

Pentru a începe lucrul la temă o să aveți nevoie de următoarele resurse:
 - Docker Swarm cu cel puțin două mașini virtuale (un manager + un worker)

## Orchestrare

Scrieți o aplicație care să efectueze următoarele operații:
- va afișa numele mașinii pe care rulează
- va scrie această informație împreună cu data și timpul într-o tabelă a unei baze de date
- va afișa ultimele 5 înregistrări ale tabelei
- atât limbajul de programare cât și sistemul de baze de date folosit sunt la liberă alegere

Scrieți un fișier compose (.yml) care să conțină următoarele definiții:
- un serviciu care va fi constituit din aplicația scrisă de voi. Acest serviciu va distribui containere de Docker pe fiecare nod din Swarm, fie el manager sau worker
- un serviciu pentru sistemul de baze de date ales care va conține un singur container

Informații ajutătoare:
- serviciul de aplicații va trebui să poată comunica cu serviciul de baze de date pentru a putea scrie informațiile necesare in tabelă
- containerul de baze de date va fi amplasat tot timpul pe aceeași mașină de unde va fi montat un volum în care vor fi scrise datele persistente
