---
layout: post
title: "Gestiunea utilizatorilor"
date: 2018-02-27 12:00:00
author: "Dragos Dimitriu"
categories: [tutorial, sisteme-operare]
excerpt_separator: <!--more-->
layout: post
highlight: true
---
## Introducere

Într-un sistem operare cu utilizatori multipli există un număr unic de identificare (UID), ce distinge utilizatori intre ei. Acesta poate fi folosit de către un operator uman sau de către o aplicație specifică.

Utilizatorii unui grup pot avea permisiuni de:
- citire (read)
- scriere (write)
- execuție (execute)

Sau orice combinație dintre cele menționate asupra fișierelor deținute (owned) de acel grup.

În funcție de distribuție este permisă utilizarea listelor de control al accesului (Acess Control Lists - ACL) pentru fișiere și directoare ce permit specificarea permisiunilor pentru utilizator, cu excepția proprietarului (owner).

Grupul reprezintă o metodă de organizare a utilizatorilor cu un scop comun, ce poate îngloba permisiuni pentru fișiere deținute de acel grup.
La fel ca pentru utilizatori, există și pentru grupuri un număr de identificare unic de grup (GID).

>Atenție!
În ditribuțiile Linux bazate pe Red Hat Enterprise, numerele de identificare respectiv, UID și GID, sub 500 sunt rezervate de sistem.
Se recomandă utilizarea ID-urilor peste 5000, iar pentru a seta acest lucru în mod implicit se pot modfica directivele UID_MIN și GID_MIN din /etc/login.defs

Fiecare utilizator poate face parte dintr-un singur grup primar și zero sau mai multe grupuri auxiliare (supplementary).
Un grup auxiliar permite utilizatorilor care fac parte din acesta accesul la fișiere deținute de acest grup.

Implicit, la crearea unui fișier, proprietarul este utilizatorul, iar grupul fișierului este grupul primar al utilizatorului.
Un utilizator își poate schimba temporar grupul primar, ceea ce determină ca fișierele noi create de acel utilizator să fie deținute de noul grup.

Un fișier are asociat permisiuni de citire, scriere și execuție pentru proprietar, grup și alții (others).
Proprietarul poate fi schimbat doar de root, iar permisiunile doar de root sau proprietar.

Implicit, un fișier sau director poate fi modificat doar de proprietar. Setările care determină comportamentul implicit se numește umask și poate fi configurat din /etc/bashrc.
Comanda umask suprascrie permisiunile implicite pe durata sesiunii.

Pentru autentificare, utilizatorul are nevoie de o parolă. O funcție hash este aplicată unui șir de caractere ce conține parola și alte elemente, după care este stocată.
Când utilizatorul dorește să se autentifice, introduce parola și este comparat rezultatul aplicării aceleași funcții cu rezultatul stocat de către sistem. Dacă acestea sunt identice, utilizatorul este autentificat.

Rezultatele funcțiilor hash sunt stocate în /etc/shadow, care poate fi citit doar de root.
De asemenea fișierul conține informații despre politici pentru parola, precum expirarea.


---

## Creare utilizatori

Utilitarul useradd este folosit pentru a crea utilitari.
Următoarele instrucțiuni arată cum puteți crea un cont implicit de utilizator cu un UID, crearea unui director home, unde vor fi stocate setările și setarea unui terminal precum /bin/bash. Implicit se creează și un grup cu aceeași denumire ca și utilizatorul, din care acesta va face parte.

```
useradd [option(s)] username
```
ex.
```
useradd -c "Robert Smith" robert # setat nume întreg
cat /etc/passwd # rezultatul
```
>`robert:x:502:502:Robert Smith:/home/robert:/bin/bash`
```
useradd -d /home/dir_1 robert # home specificat
useradd -M username # fară home
useradd -m -k /dir_1 jane # copiază conținutul din /dir_1 în /home/jane
useradd -e YYYY-MM-DD username # cont temporar (a nu se confunda cu o parolă temporară)
useradd -s login_shell username # setat alte terminale, precum bash, ksh, chs, tsh
useradd -r username # cont de administrator, dar nu cu toate privilegiile root-ului
useradd -N username # cont fără UPG (User Private Group)
useradd -g group_0 -G group_1,group_2,group_3 username # -g - setat grup principal, -G - setat grup secundar
```

Setare parolă (se introduce parola de două ori, conform instrucțiunilor):
```
passwd option(s) username
```
ex.
```
passwd -l username # blocare cont, prefixeaz semnul exclamării la parolă stocată, operație permisă doar de root
passwd -u username # deblocare cont, operație permisă doar de root
passwd -e username # forțează utilizatorul să își schimbe parola după autentificare
passwd -n 10 -x 60 -w 3 # setează valabilitatea parolei: nu se poate schimba în primele 10 zile, trebuie schimată după 60 de zile și se prezintă avertizări cu 3 zile inainte de a expira.
passwd -S username # informații pe scurt despre expirarea parolei
useradd -f number-of-days username # specifică numărul de zile până să fie dezactivat contul după ce a expirat parola.
```

---

## Modificare setări pentru utilizator

```
usermod [option(s)] username # modifică opțiunile unui utilizator deja existent, logica și sintaxa similară cu cea pentru comanda useradd
```
ex.
```
usermod -l new_username old_username # schimbă denumirea utilizatorului
```

---
## Ștergere utilizator

```
userdel [option(s)] username
```
ex.
```
userdel username # ștergerea utilizatorul username din sistem
userdel -r username # ștergerea utilizatorului, împreună cu directorul home, conținutul său și căsuța de mesaje
```
---
## Listare informații detaliate despre utilizatorii din sistem
Comanda lslogins este folosită pentru administrarea utilizatorilor și grupurilor din sistem.
Se face distincție între conturi de utilizatori și conturi de sistem prin folosirea opțiunilor --user-accs, respectiv --system-accs
```
lslogins [option(s)]
```
ex.
```
lslogins # informații implicite
lslogins --help # lista completă de opțiuni disponibile
lslogins LOGIN # informații despre un singur utilizator, unde LOGIN poate fi un username sau UID
lslogins --login=LOGIN # informații pentru o mai mulți utilizatori
```

---
## Creare grupuri

Pentru a crea un grup nou, se folosește comanda groupadd, ca root:
```
groupadd [option(s)] groupname
```
ex.
```
groupadd group_name # creare grup cu setări implicite
cat /etc/group # rezultatul
```
>`group_name:x:30005:`
```
groupadd -g GID group_name # creează grupul cu GID specificat, dacă respectă unicitatea (excepție în cazul utilizării opțiunii -o)
groupadd -r group_name # creează grup de sistem, cu un GID între 1 și 499
```

---

## Modificare setări pentru grup

Comanda gpasswd administrează  fișierele /etc/group și /etc/gshadow. Acestă comandă funcționează doar pentru administratorii grupului, ce pot:
- adăuga și șterge utilizatori
- seta, schimba sau elimina parola de grup

 Pentru a adăuga adminitratori de grup, root poate utiliza comanda:
 ```
gpasswd -A username_1,username_2 groupname
```
ex.
```
gpasswd group_name # setarea sau schimbarea parolei grupului
gpasswd -r group_name # eliminarea parolei grupului
gpasswd -a username group_name # adăugare utilizator în grup
gpasswd -d username group_name # eliminare utilizator din grup
gpasswd --members username_1,username_2 group_name # adăugare în grup a unei liste de utilizatori
```
Comanda groupmod poate fi utilizată pentru a modifica setările unui grup existent:
ex.
```
groupmod -g NEW_GID group_name # schimbare GID pentru grup
```
>Atenție!
>Trebuie găsite toate fișierele ce aparțin acelui GID inițial și schimbat proprietarul. La fel trebuie procedat și cu Listele de Control al Accesului (ACLs) ce fac referințe la acel GID.
>Recomandat este și verificarea proceselor ce pot rula cu GID-ul inițial.
```
groupmod -n new_group_name group_name # schimbare denumire grup
```

---


## Ștergere grup

Se utilizează comanda groupdel pentru a șterge toate intrările referitoare la grupul specificat
```
groupdel group_name
```

---
## Permisiuni

Toate fișierele și directoarele create de un utilizator, sunt proprietatea (owned by) acestuia. Acest lucru presupune că acesta specifică ce permisiuni pot avea alți utilizatori sau alte grupuri asupra fișierelor sau directorelor deținute.
```
ls -l # listează fișierele și directoarele din directorul curent
```
Se poate observa că sunt 10 poziții în prima coloană a rezultatului comenzii anterioare:
ex.
```
-rw-rw-r--
```
Prima poziție indică tipul fișierului:
- \-- : fișier normal
- d : director
- l : symbolic link (referință la un alt fișier sau program din sistem)

Următoarele poziții sunt grupate câte 3:
pe ex. anterior:
```
-  (rw-)   (rw-)   (r--)
```
De la stânga la dreapta aceste grupuri reprezintă:
- permisiunile proprietarului (owner)
- permisiunile grupului din care proprietarul face parte (group)
- permisiunile altor utilizatori (others)

Într-un astfel de grup pot apărea:
- r : fișierul poate fi citit
- w : fișierul poate fi scris
- x : fișierul poate fi executat
- \-- : permisiunea nu este atribuită

Pentru schimbarea permisiunilor se utilizează comanda chmod. Pentru a schimba orice permisiune (a proprietarului, a grupului sau altora) trebuie să fie utilizat contul proprietarului sau root.
Opțiunea -R aplică recursiv permisiunile pe întregul arbore de directoare (directory tree).
```
chmod [option(s)]... mode[,mode]... file...  
chmod [option(s)]... octal-mode file...  
chmod [option(s)]... --reference=rfile file...
```
>Atenție!
>Când se adaugă sau revocă permisiune de execuție pe un director, defapt se permite sau nu accesul la conținutul directorului. Dacă permisiunea de execuție nu este specificată pentru un director, atunci nu contează cine are drepturi de citire sau scriere, doar cine cunoaște denumirea fișierului din acest director are acces la el.

Sunt 2 moduri de a exprima permisiunile:
- modul 1 (mode) - se aplică acțiuni de adăugare, revocare sau înlocuire a permisiunilor pentru identități
	- Identități
		- u : proprietarul (user)
		- g : grupul proprietarului (group)
		- o : alții (others)
		- a : toți (u, g și o) (all)
	- Permisiuni
		- r : citire (read)
		- w : scriere (write)
		- x : execuție (execute)
	- Acțiuni:
		- \+ : adaugă permisiuni
		- \-- : revocă permisiuni
		- = : înlocuiește cu noile permisiuni
- modul 2 (octal-mode) - se calculează permisiunile în funcție de reprezentarea numerică
	- Permisiuni
		- 4 : citire (read)
		- 2 : scriere (write)
		- 1 : execuție (execute)
		- 0 : \--

ex.
```
chmod g=rx file # permite doar grupului să citească și să execute, rezultat: ----r-x---
chmod o-rwx file # revocă toate permisiunile altora (others), rezultatul depinde de permisiunile anterior setate
chmod 644 file # -  (rw-)   (r--)   (r--), rezultat: -rw-r--r--
			   # -	6=4+2     4       4
chmod 755 file # rezultat: -rwxr-xr-x
chmod 700 directory # rezultat: drwx------
```

---
## Resurse:

https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/deployment_guide/
https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/4/html/Step_by_Step_Guide/s1-navigating-ownership.html
