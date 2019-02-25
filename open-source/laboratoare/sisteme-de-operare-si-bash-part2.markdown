---
title: "Sisteme de operare și Bash"
permalink: /open-source/laboratoare/sisteme-de-operare-si-bash-part2/
group: 'open-source'
layout: post
color: pink
icon: fab fa-osi
date: 2019-02-18 12:00:00
author: "Gabriel Paiu"
excerpt_separator: <!--more-->
---

## Pregatirea mediului de lucru

Pentru laboratorul curent o să aveți nevoie de o mașină virtuală cu Centos 7.  
În cazul în care întâmpinați probleme în instalarea sistemului de operare puteți consulta următorul articol [Instalarea sistemului de operare CentOS 7][1].  
În prima săptămână am lucrat la configurarea maşinii virtuale.  
Vom continua cu exerciţiile propuse, după care vă încurajăm sa intraţi şi să verificaţi cerintele <a href="../../teme/tema-1">temei nr1</a>.  

## Partea 2

## Recapitulare notiuni de Bash

O scurtă recapitulare a noțiunilor de bază despre Bash ce au fost discutate în cadrul cursului de Sisteme de Operare poate fi găsită la următoarea [adresă][2].

## Exercitii

### Exercitiul 1

Sa se scrie un script Bash care sa compare structurile a doua directoare primite ca argumente din linia de comanda. Doua directoare se considera egale daca contin aceleasi subdirectoare si fisiere.
Hint: Puteti folosi comanda diff

### Exercitiul 2

Se da un fisier .csv (campuri separate prin virgula), cu linii de forma:
```
server-1.tld.com,10.10.0.1,Apache 2.4,PHP 5,MySQL 5.5
```

Sa se extraga si afiseze datele in urmatorul format

```
Host: server-1.tld.com
IP: 10.10.0.1
Web: Apache 2.4
Backend: PHP 5
Database: MySQL 5.5
```

Hint: Puteti folosi comanda cut

### Exercitiul 3

Sa se scrie un program care gestioneaza backup-uri pentru un fisier primit ca argument.
Gestionare va consta in:
- arhivarea fisierului curent
- arhiva va avea numele fisierului, concatenand data (an, luna, zi, ora, minut, secunda)
- daca exista mai mult decat 3 arhive, cea mai veche dintre ele va fi stearsa si inlocuita de cea noua

### Tema

Pentru pregătirea temei de laborator nr 1, va propunem sa începeţi să treceţi prin următorii paşi.
- Începem cu pregătirea unui cont de Github, dacă nu aveţi deja
- Să vă instalaţi aplicaţia "git" pe maşina virtuală
- Să vă conectaţi prin aplicaţia "git" la contul vostru de Github şi să faceţi primul commit in repository cu un fişier de test
- Să faceţi o modificare pe fişierul de test (preferabil din interfaţa web) şi să vedeţi cum se poate actualiza pe VM fişierul cu ultimele modificări din repository
- Să începeţi să lucraţi la scriptul "bootstrap.sh" 

[1]: {{ site.baseurl }}/resurse/tutorial/virtualbox/instalare-centos-7/
[2]: {{ site.baseurl }}/resurse/tutorial/sisteme-operare/notiuni-introductive-in-bash/

