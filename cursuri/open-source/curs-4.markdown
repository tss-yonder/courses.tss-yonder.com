---
title: "Curs 4"
permalink: /cursuri/open-source/curs-4/
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
- Virtualizare
- Gestiunea mașinilor virtuale
- Containere
- Cloud



## Virtualizare
- Software-ul din zilele noastre necesită resurse din ce în ce mai multe. Aici vorbim despre putere de procesare, memorie, capacitate de stocare etc.
- Virtualizarea este procedeul prin care se poate seta o mașină fizică să se comparte ca mașini multiple, astfel salvând din costurile unor mașini fizice noi.
- Este tehnologia prin care sunt exploatate resursele hardware la capacitate maximă, distribuind capabilitățile între multipli utilizatori și medii.

## Virtualizare
- Virtualizare, ca și tehnologie, datează din anii ’60, dar adoptarea s-a început prin anii 2000.
- La începuturi, componentele ce permiteau virtualizarea, au fost dezvoltate pentru a permite accesul mai multor utilizatori simultan, ce puneau în execuție „batch processes”. 
- Aceste procese erau populare în sectorul privat, unde era necesar execuția unei sarcini de rutină de mii de ori la viteză mare (precum statul de plată pentru toți angajații)

## Virtualizare
- Problema accesului simultan de către utilizatori multipli a fost soluționată utilizând conceptul de „time-sharing” ce a dus la sisteme de operare precum Unix. Astfel virtualizarea a rămas o tehnologie de nișă.
- O nouă problemă a apărut la inceputul anilor ’90, când firmele aveau propriile resurse hardware și stiva tehnologică de la un singur furnizor. Acest lucru nu permitea să se poată folosi alți furnizor pe aceeași resursă hardware.


## Virtualizare
- Companiile căutând să actualizeze mediul IT cu mașini fizice mai ieftine, sisteme de operare și aplicații de la furnizori diferiți, erau limitate de serverele care aveau resursele necesare, dar puteau rula doar stiva tehnologică de la un singur furnizor. <br>
- Soluția a fost virtualizarea: <br>
Companiile puteau folosi diverse sisteme de operare pentru diverse aplicații <br>
Resursele erau folosite mai eficient, reducând costurile <br>

## Virtualizare
- Vă puteți imagina scenariul în care erau necesare 3 servere fizice, fiecare cu un scop separat. Existența unor aplicații vechi necesitau un anumit sistem de operare și se prefera separarea fiecărui server, cu un anumit sistem de operare ce executa doar sarcina unei singure aplicații. Dacă fiecare server era utilizat 30%, ar fi fost irosite resursele.

## Virtualizare
![hardware_host](/{{ "assets/images/courses/virt_61.png" | prepend: site.baseurl }})
![virtual_host](/{{ "assets/images/courses/virt_62.png" | prepend: site.baseurl }})

## Virtualizare
- Tipuri:
    - Virtualizare de date <br>
Permite gestiunea stocării de date din diverse surse ca o singură unitate. <br>
Permite ca datele să fie văzute ca o aprovizionare dinamică având capabilități de procesare ce pot aduce împreună date din surse multiple, adăuga noi surse cu ușurință și transforma datele în funcție de necesitățile utilizatorilor, fără a fi necesare detaliile tehnice despre acele date, precum formatarea sau locația fizică. <br>

## Virtualizare
- Tipuri:
    - Virtualizare de date <br>
Ex. Linked Data – un singur data source name bazat pe un hyperlink care furnizează conexiunea la stratul virtual de baze de date ce este conectat intern la o varietate de data sources precum ODBC, JDBC, OLE DB, ADO.NET, servicii SOA, servicii cu tiparul REST.

## Virtualizare
- Tipuri:
    - Virtualizare desktop <br>
    Permite unui sistem de administrare central să facă „deploy” la medii simulate de desktop către mașini fizice multiple. <br>
    Față de modul tradițional de lucru, aici instalările, configurările și update-urile sunt efectuate în masă <br>
    Confundat adesea cu virtualizarea sistemului de operare - Ex. virtual desktop infrastructure (VDI) <br>

## Virtualizare
- Tipuri:
* Virtualizare server <br>
    Dacă laptopul sau desktopul sunt gândite pentru a efectua sarcini variate, serverele sunt concepute pentru a procesa un volum mare de sarcini specifice. <br>
    Permite partiționarea componentelor ce pot fi utilizate pentru funcții multiple.

## Virtualizare
* Virtualizare sistemului de operare <br>
    Acest tip se procesează la nivel de kernel <br>
    Permite rularea unor diverse sisteme de operare pe același hardware, reducând costurile echipamentelor, sporind securitatea prin izolarea si monitorizarea instantelor virtuale


## Virtualizare
- Tipuri:
- Virtualizare funcțiilor de rețea <br>
Permite separarea funcțiilor cheie (directory services, file sharing, and IP configuration) intr-o rețea pentru a fi distribuite peste mai multe medii (environments). <br>

## Virtualizare
- Tipuri:
- Virtualizare funcțiilor de rețea <br>
Din moment ce funcțiile software sunt separate de echipamentele fizice, anumite funcții pot fi grupate împreună și puse la dispoziția unei rețele noi create. <br>
Totodată această separare reduce numărul de echipamente fizice necesare, precum switches, routers, servere cabluri, ce ar fi fost necesare pentru creearea unor rețele independente.

## Gestiunea mașinilor virtuale
- Hypervisor <br>
Un hipervizor (sau virtual machine monitor – VMM) este un produs software, firmware sau hardware care crează și rulează mașini virtuale.
O mașină pe care un hipervizor rulează una sau mai multe mașini virtuale se numește host, iar fiecare mașină virtuală se numește guest.

## Gestiunea mașinilor virtuale
- Tipuri:
- Type-1 (native sau bare-metal) <br>
Acest tip rulează direct pe hardware-ul host-ului și gestionează sistemele de operare guest. Primii hipervizori, dezvoltați de IBM în 1960, erau nativi. <br>
Exemple: Xen, Oracle VM Server for SPARC, Oracle VM Server for x86, Microsoft Hyper-V and VMware ESXi

## Gestiunea mașinilor virtuale
- Tipuri:
- Type-2 (hosted)
Acest tip rulează pe un sistem de operare convențional ca orice alt program software. Un sistem de operare guest se execută ca un proces normal pe host. <br>
Hipervizorii de acest tip abstractizează un sistem de operare de tip guest de host. <br>
Exemple: VMware Workstation, VMware Player, VirtualBox, Parallels Desktop pentru Mac și QEMU sunt hipervizori type-2.

## Gestiunea mașinilor virtuale
![virtual_types](/{{ "assets/images/courses/virt_121.png" | prepend: site.baseurl }})

## Gestiunea mașinilor virtuale
- Una din cele mai bune moduri de a determina care hipervizor se potrivește nevoilor este o comparație a metricilor de performanță. Acestea includ capacitatea CPU-ului, memoria necesară pentru host și guest și suportul pentru procesoare virtuale.
- Pe lângă metrici, trebuie avut în vedere și compatibilitatea cu sisteme de operare folosite ca guest.

## Containere
- Idea de container a apărut ca și concept inițial pentru FreeBSD jail în anii 2000.
- Tehnologia permitea separarea unui sistem FreeBSD în mai multe subsisteme numite jails. Acestea erau folosite ca medii (environments) sigure pentru accesul utilizatorilor multiplii din interiorul și din afara organizațiilor.

## Containere
![containers_intro](/{{ "assets/images/courses/virt_141.png" | prepend: site.baseurl }})

## Containere
- Într-un jail scopul era ca un proces să ruleze într-un mediu modificat (chrooted), unde accesul la filesystem, rețea și utilizatori era virtualizat, pentru a nu permite compromiterea întregului sistem.
Existau limitări în această implementare și ulterior s-au găsit metode de a „scăpa” din jail.
- Un container de Linux reprezintă un set de procese ce sunt izolate de restul sistemului, ce rulează de pe o imagine distinctă ce conține toate fișierele necesare pentru acel set.

## Containere
- Toate dependințele fiind în interiorul acelei imagini, este considerat portabil și consistent.

## Containere
- O imagine de container reprezintă un pachet executabil de sine stătător și „lighweight” ce include toate dependițele necesare pentru a rula:
    - Cod
    - Sistem runtime (control asupra oricărui comportament care este determinat dinamic în timpul execuției)
    - Utilitare de sistem
    - Librării de sistem
    - Setări
- Imaginile rulează la fel, indiferent de platformă (windows, linux).

## Containere
![containers_intro2](/{{ "assets/images/courses/virt_151.png" | prepend: site.baseurl }})

## Virtualizare vs Containere 
- Virtualizarea permite mai multor sisteme de operare să ruleze simultan.
- Containerele împart același kernel al sistemului de operare și izolează procele aplicațiilor de restul sistemului

## Virtualizare vs Containere 
![virtual_containers](/{{ "assets/images/courses/virt_161.png" | prepend: site.baseurl }})

## Virtualizare vs Containere 
![virtuals_containers](/{{ "assets/images/courses/virt_171.png" | prepend: site.baseurl }})

## Cloud
- NIST (National Institute of Standards and Technology ) citează 5 caracteristici a cloud computing:
    - O rețea
    - Pooled resource
    - Interfață de utilizator
    - Provisioning
    - Mod automat de alocare/control al resurselor

## Cloud
- Private cloud <br>
Permit companiilor să își pună la dispoziție resursele „on-demand” în timp ce asigură polici de securitate sau reguli ce limitează accesul, asigură confidențialitate și responsabilitate pentru utilizarea acelor resurse. <br>
După ce resursele au fost virtualizate, produse open-source precum OpenStack permit gestiunea mai ușoară a unui „cloud”.

## Cloud
- Public cloud
Reduce necesitatea de a investi în resurse hardware proprii și în echipe de gestiunea a sistemelor deoarece totul este deținut și gestionat de un furnizor. <br>
Astfel un client ce are nevoie de anumite resurse, platforme sau servicii plătesc unui furnizor cu ora sau byte-ul pentru a avea acces la acele resurse când au nevoie

## Cloud
- Infrastructure as a service (IaaS)  oferă utilizatorilor accesul la resurse de calcul precum servere, sisteme de storcare și rețea. Organizațiile își folosesc propriile platforme și aplicații în infrastructura furnizorului.
- Platform as a service (PaaS)  oferă un mediu cloud în care pot dezvolta, gestiona și livra propriile aplicații.
- Software as a service (SaaS)  oferă utilizatorilor accesul la aplicații dezvoltate de către furnizor. Acestea nu sunt instalate local și sunt accesibile pe web sau printr-un API.

## Cloud
![virtuals_stacks](/{{ "assets/images/courses/virt_211.png" | prepend: site.baseurl }})

## Cloud
- SaaS : Google Apps, Microsoft Office 365, Salesforce, Workday, Concur, Citrix GoToMeeting, Cisco WebEx
- PaaS : AWS Elastic Beanstalk, Microsoft Azure, Heroku, Force.com, Google App Engine, Apache Stratos.
- IaaS : Amazon Web Services (AWS), Cisco Metapod, Microsoft Azure, Google Compute Engine (GCE), Joyent

## Recapitulare
- Virtualizare
- Gestiunea mașinilor virtuale
- Containere
- Cloud

## Referinţe
https://www.redhat.com/en/topics/virtualization <br>
https://en.wikipedia.org/wiki/Virtualization <br>
https://en.wikipedia.org/wiki/Hypervisor <br>
https://www.ibm.com/developerworks/cloud/library/cl-hypervisorcompare/ <br>
https://www.ibm.com/cloud/learn/iaas-paas-saas <br>
https://en.wikipedia.org/wiki/Data_virtualization <br>
https://www.docker.com/what-container <br>

## Mulțumim!
