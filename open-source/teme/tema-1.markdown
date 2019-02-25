---
title: "Tema - Configurarea mașinilor virtuale"
permalink: /open-source/teme/tema-1/
group: "open-source"
layout: post
color: blue
icon: fas fa-laptop
highlight: true
author: "Andrei Sahaidac"
date: 2019-02-25 12:00:00
---

## Consultarea resurselor

Pentru rezolvarea acestei teme aveți la dispoziție următoarele tutoriale:
- [Gestiunea utilizatorilor][0]
- [Managementul discurilor][1]
- [Managementul pachetelor][2]
- [Gestiunea proceselor][3]
- [Noțiuni introductive de rețelistică][4]
- [Instalarea sistemului de operare CentOS 7][5]
- [Noțiuni introductive în Bash][6]
- [git - noțiuni introductive][7]

## Resurse necesare

Pentru a începe lucrul la temă o să aveți nevoie de următoarele resurse:
 - utilitarul [git][8] și un cont pe [GitHub] (puteți opta pentru beneficiile pentru [studenți][9])
    - În cazul în care întâmpinați probleme puteți consulta următorul articol [git - noțiuni introductive][7]
 - un depozit de cod pentru tema curentă (pentru modul de lucru cu git vă puteți inspira din tutorialul [git - propunerea unei soluții][10])

## Exerciții

### Fișiere de configurare

În cadrul depozitului de cod va trebui să pregătiți o serie de fișiere de configurare (într-un format la liberă alegere) care să descrie modificările ce trebuie făcute pentru fiecare mașină virtuală (identificate unic după hostname).

Minimalist se va descrie:

- resursele hardware ale mașinii virtuale (CPU, memorie, discuri etc)
- interfețe de rețea -- pentru fiecare interfață se va preciza tipul și opțional setările ce trebuiesc făcute (de exemplu: adresa IP, adresa MAC, gateway, servere de DNS etc)
- dacă se dorește actualizarea sistemului de operare
- aplicații ce trebuie instalate

### Imagine de bază pentru mașinile virtuale

Pregătiți o mașină virtuală ce va avea ca sistem de operare CentOS urmând pașii descriși în cadrul tutorialului [Instalarea sistemului de operare CentOS 7][5].

Pe lângă sistemul de operare instalat în cadrul acestei mașini virtuale va trebui să adăugați un serviciu care va rula o singură dată, următoarea dată când mașina virtuală va fi pornită.
Serviciul adăugat va trebui să îndeplinească următorii pași:
 - să verifice dacă fișierul de configurare (aflat la o locație prestabilită în cadrul sistemului de fișiere) este accesibil -- eventual se poate asigura că locația respectivă devine accesibilă
 - să citească dintr-un fișier de configurare toate informațiile de care are nevoie pentru a configura sistemul
 - va seta hostname-ul pentru mașina virtuală
 - va configura interfața de rețea ce ne permite acces la resurse externe
 - va instala utilitarul git și va clona depozitul de cod pregătit pentru tema curentă
 - va lansa în execuție script-ul *boostrap.sh* aflat în depozitul de cod anterior menționat 

### Bootstrap.sh

Va trebui să dezvoltați un script bash care se va ocupa de setările inițiale ale sistemului de operare. 
Script-ul va obține toate informațiile necesare dintr-un fișier de configurare disponibil în cadrul depozitului de cod în care este inclus.

Minimal scriptul va efectua următoarele acțiuni:

- va efectua actualizări pentru programele de sistem existente
- va configura toate interfețele de rețea disponibilie
- va configura procesul de SSH astfel încât autentificarea pe bază de parolă nu va mai putea fi efectuată, în schimb, veți putea folosi chei de tip RSA, pe care o veți și instala
- va reține datele de ieșire și mesajele de eroare în fișierul /var/log/system-bootstrap.log
- inspectează fișierul /etc/selinux/config și se asigură că parametrul ”SELINUX=” este ”disabled” după care va lansa comanda “setenforce 0”

## Informații utile

Barem:
- propunerea unei soluții: **2 punct**
- SystemD unit file: **3 punct**
- boostrap.sh: **5 puncte**

Termen limită: **săptămâna 4** în cadrul orelor de laborator (tema nu va putea fi prezentată după această dată)

[0]: {{ site.baseurl }}/resurse/tutorial/sisteme-operare/gestiunea-utilizatorilor/
[1]: {{ site.baseurl }}/resurse/tutorial/sisteme-operare/managementul-discurilor/
[2]: {{ site.baseurl }}/resurse/tutorial/sisteme-operare/manager-pachete/
[3]: {{ site.baseurl }}/resurse/tutorial/sisteme-operare/gestiunea-proceselor/
[4]: {{ site.baseurl }}/resurse/tutorial/sisteme-operare/retea/
[5]: {{ site.baseurl }}/resurse/tutorial/virtualbox/instalare-centos-7/
[6]: {{ site.baseurl }}/resurse/tutorial/sisteme-operare/notiuni-introductive-in-bash/
[7]: {{ site.baseurl }}/resurse/tutorial/sisteme-operare/notiuni-introductive-in-bash/
[8]: https://git-scm.com/
[9]: https://education.github.com/pack
[10]: {{ site.baseurl }}/resurse/tutorial/git/propunerea-unei-solutii/
[11]: https://www.virtualbox.org/sdkref/index.html
[GitHub]: https://github.com/
[VirtualBox]: https://www.virtualbox.org/
[VBoxManage]: https://www.virtualbox.org/manual/ch08.html
