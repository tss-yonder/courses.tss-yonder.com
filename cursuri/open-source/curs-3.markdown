---
title: "Curs 3"
permalink: /cursuri/open-source/curs-3/
layout: shower
date: 2018-02-07 12:00:00
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
- Versionarea produselor software
- Sisteme de control al versiunilor (Version Control System - VCS)
- CVS
- SVN
- Git, Mercurial
- Git best practices


## Versionarea produselor software
- Generic, avantajul versionării constă în faptul că piața s-a familiarizat cu produsul inițial și astfel se evidențiază schimbări sau îmbunătățiri asupra produsului utilizând un set de reguli de versionare.
- În contextul produselor software, modificarea și publicarea unei noi versiuni este un proces rapid, iar utilizarea anilor sau lunilor nu este o opțiunea viabilă de obicei. 
- Ciclurile de iterație sunt scurte, iar potențialul pentru numeroase ediții simultane este mare.


## Versionarea produselor software
- Putem împărți acest topic în 2 categorii:
- Versionarea publică: 
- Simplă și memorabilă (contra-exemplu: Office 10.6.6527.14789)
- Windows 7
- iOS10
- Office 2013
- Versionare privată:
- Folosită pentru a identifica unic o versiune specifică a unui produs software


## Versionarea produselor software
- Există mai multe scheme de versionare populare, dar toate au o temă comună:
- Major: reprezintă schimbări majore, ce adesea întrerupe compatibilitatea cu versiunile mai vechi sau implementarea unor noi funcționalități majore
- Minor: reprezintă schimbări mai puțin „substanțiale”, majoritatea update-uri, îmbunătățiri în funcționalitatea existentă sau un set mic de functionalități noi


## Versionarea produselor software
- Semantic Versioning 2.0.0
- Dat un număr de versiune MAJOR.MINOR.PATCH, se incrementează:
- MAJOR atunci când schimbări ce întrerupe compatibilitatea cu versiunile vechi
- MINOR atunci când se adaugă funcționalitate nouă într-un mod compatibil cu versiuni vechi
- PATCH atunci când se lucrează la soluții pentru bug-uri compatibile cu versiuni vechi


## Versionarea produselor software
- Linux kernel
- Upstream version
- Versiunea pe care Linus sau alt maintainer pentru seria stabilă o utilizează. Formatul: 4.x.y
- Package version
- Versiunea folosită într-un pachet debian. Urmând politica debian, are formatul: upstreamversion-debianrevision


## Versionarea produselor software
- Kernel version
- Această versiune apare în mesaje. 
- Formatul oficial: format upstreamversion[-abiname][-featureset]-flavour


## Versionarea produselor software
![release_cycle](/{{ "assets/images/courses/release_cycle.png" | prepend: site.baseurl }})


## Versionarea produselor software
- Alpha – starea inițială
- Beta – conține toate funcționalitățile, dar poate conține și bug-uri
- RC – reprezintă o versiune beta, dar cu potențial de a merge spre producție, cu excepția existenței unui bug major
- RTM – reprezintă produsul software gata de distribuție
- GA -  reprezintă etapa de marketing în care produsul este  finalizat și disponibile pentru achiziționare


## Istoric – CVS - Concurrent Versions System
- CVS este un sistem de gestionare a versiunilor
- CVS permite unui grup de utilizatori să lucreze (vizualizare, editare) simultan pe aceleaşi fişiere
- Un repository global va conţine o copie completă a tuturor datelor;
- Pentru a face modificări, se va face întâi o copie locală (checkout);

## Istoric – CVS - Concurrent Versions System
![diagrama_cvs](/{{ "assets/images/courses/cvs.png" | prepend: site.baseurl }})

## Istoric – CVS - Concurrent Versions System 
- Pentru a actualiza copia locală, vom face update la ultima versiune de pe repository global; 
- Pentru a trimite modificări locale către repository global, se poate face commit; 
- Dacă la update versiunea locală intră în conflict cu versiunea globală, va fi nevoie de un merge


## Istoric – CVS - Concurrent Versions System
- Un dezavantaj al CVS este faptul că este un sistem centralizat
- CVS nu este atomic – când se face un commit cu mai multe resurse modificate, unele ar putea fi modificate pe server, dar altele ar putea avea erori si nu vor fi modificate
- CVS are un sistem de a gestiuna conflictele între versiunile locale si cele de pe server, dar acest sistem este mult îmbunătăţit în generaţiile următoare de tooluri de versionare Subversion, Git, Mercurial


## Istoric – SVN
- Este un sistem de control al versiunilor distribuit sub licență Apache
- Software developers use Subversion to maintain current and historical versions of files such as source code, web pages, and documentation. 
- Este utilizat pentru a păstra versiuni a codului sursă, pagini web și documentație.
- Folosit ca succesor al CVS.


## SVN
- Subversion oferă multiple moduri de stocare.
- Berkeley DB (deprecated)
- Cel mai sigur de folosit acest tip de repository implică folosirea unui unui singur proces cu rolul unui utilizator (în loc de un filesystem partajat)
- FSFS
- Conținutul este stocat direct pe filesystem al sistemului de operare, față de Berkeley DB.

## SVN
- Accesul la un repository de Subversion:
- Filesystem local sau în rețea, accesat direct de client. 
- Ex. file:///path access scheme.
- WebDAV/Delta-V (peste http or https) folosit modulul mod_dav_svn module. 
- Ex. http://host/path access scheme 


## SVN 
- Protocol textual SVN (port implicit 3690) peste TCP/IP.
- Ex. svn://host/path access scheme 
- RabbitVCS client pentru Linux.
- TortoiseSVN client implementat ca o extensie shell pentru Microsoft Windows

## SVN – Branching and tagging
![svn_branching](/{{ "assets/images/courses/svn_branches.png" | prepend: site.baseurl }})


## SVN – Branching and tagging
- Un branch reprezintă o „linie” separată de dezvoltare
- Tagging face referire la un punct temporal pentru a fi ușor de găsit ulterior. În Subversion, singura diferență între branch și tags este modul de utilizare.


## Modern – Git, Mercurial
- După ce mai mulţi dezvoltatori ai proiectului Linux Kernel au început să renunţe la sistemul de Source Code Management BitKeeper, Git a fost creat de către Linus Torvalds în 2005 pentru a fi un sistem de versionare a codului pe care se poate lucra în mod colaborativ, conform cerinţelor de pe proiectul Linux Kernel
- The name "git" was given by Linus Torvalds when he wrote the very first version. He described the tool as "the stupid content tracker"


## Modern – Git, Mercurial
- Mercurial a început ca şi proiect după o decizie de a se renunţa la sistemul de Source Code Management BitKeeper, 
- Facebook a adoptat Mercurial ca şi sistem de versionare in 2013
- „ When we first started working on Mercurial, we found that it was slower than Git in several notable areas. To narrow this performance gap, we've contributed over 500 patches to Mercurial over the last year and a half.”
- https://code.facebook.com/posts/218678814984400/scaling-mercurial-at-facebook/


## Cum ar trebui sa folosim Git ?
- De ce am vrea sa folosim Git ? Pentru a nu lucra asa !
![not_use_git1](/{{ "assets/images/courses/not_use_git1.png" | prepend: site.baseurl }})


## Cum ar trebui sa folosim Git ?
- De ce am vrea sa folosim Git ? Pentru a nu lucra asa !
![not_use_git2](/{{ "assets/images/courses/not_use_git2.png" | prepend: site.baseurl }})

## Cum ar trebui sa folosim Git ?
- Un exemplu de mod de lucru cu mai multe versiuni de cod

## Cum ar trebui sa folosim Git ?
![git_workflow](/{{ "assets/images/courses/git_workflow.png" | prepend: site.baseurl }})

## Cum ar trebui sa folosim Git ?
- Git este DVCS - Distributed Version Control Systems – dar avem un repository central – origin (de exemplu)
- Fiecare contribuitor va lua ultimele modificari din repo-ul origin 
- Fiecare contribuitor isi va trimite modificarile sale catre acest repo, daca doreste sa le faca disponibile pentru restul colaboratorilor

## Cum ar trebui sa folosim Git ?
- Pentru a face diferenta intre mai multe versiuni ale aceluiasi cod, vom folosi “branch-uri”. 
- Pentru a ne trimite modificarile facute codului, trebuie intai sa lucram pe un branch, sa luam versiunea din acel branch, sa facem modificarile si sa trimitem modificarile inapoi catre acel branch

## Cum ar trebui sa folosim Git ?
![git_flow_diagram](/{{ "assets/images/courses/git_flow_diagram.png" | prepend: site.baseurl }})

## Cum ar trebui să folosim Git ?
- Clone
- Prin clone vom face o copie completa a repo-ului
![git_clone](/{{ "assets/images/courses/git_clone.png" | prepend: site.baseurl }})

## Cum ar trebui să folosim Git ?
- Checkout pe branch
- Prin checkout vom selecta o anumită revizie activă a repo-ului şi a branch-ului pe care dorim să lucrăm local (setăm starea locală la versiunea dorită din istoricul repo-ului)
![git_checkout](/{{ "assets/images/courses/git_checkout.png" | prepend: site.baseurl }})

## Cum ar trebui să folosim Git ?
- Commit
- Prin commit vom înregistra schimbarea facută de noi în istoricul local al repo-ului
![git_commit](/{{ "assets/images/courses/git_commit.png" | prepend: site.baseurl }})

## Cum ar trebui să folosim Git ?
- Push
- Prin acţiunea de push vom trimite starea locală şi istoricul repository-ului către repo-ul de git pe care l-am clonat anterior; aici se va integra starea repo-ului local şi istoricul cu cea mai recentă versiune disponibilă
![git_push](/{{ "assets/images/courses/git_push.png" | prepend: site.baseurl }})

## Cum ar trebui să folosim Git ?
- Merge
- Prin merge vom combina starea specifică anumitui branch cu alt branch (versiunile fişierelor, conţinutul, istoricul)
![git_merge](/{{ "assets/images/courses/git_merge.png" | prepend: site.baseurl }})

## Cum ar trebui să folosim Git ?
- Fork
- Prin fork vom face o “clonă” a repo-ului la nivel de server (clonă la nivel de workspace al userului), pe care vom apoi putea să îl clonăm local şi să continuăm să lucrăm pe o versiune derivată din starea iniţială a repo-ului
![git_fork](/{{ "assets/images/courses/git_fork.png" | prepend: site.baseurl }})

## Cum ar trebui să folosim Git ?
- Revert
- Prin revert vom duce starea repo-ului către o versiune înregistrată anterior în istoricului repo-ului, astfel încât vom înlătura anumite modificări făcute;
![git_revert](/{{ "assets/images/courses/git_revert.png" | prepend: site.baseurl }})

## Recapitulare
- Versionarea produselor software
- Sisteme de control al versiunilor (Version Control System - VCS)
- CVS
- SVN
- Git, Mercurial
- Git best practices

## Referințe
- https://ro.wikipedia.org/wiki/Controlul_versiunilor
- https://subversion.apache.org/
- https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control
- https://blog.codinghorror.com/whats-in-a-version-number-anyway/
- http://inf.ucv.ro/~mihaiug/courses/mps/labs/cvs/
- http://www.thathost.com/wincvs-howto/cvsdoc/cvs_10.html

## Referințe
- http://acs.ase.ro/Media/Default/documents/cts/SeminarZamfiroiu/GIT.pdf
- http://nvie.com/posts/a-successful-git-branching-model/
- https://en.wikipedia.org/wiki/Software_release_life_cycle


## Mulțumim!
