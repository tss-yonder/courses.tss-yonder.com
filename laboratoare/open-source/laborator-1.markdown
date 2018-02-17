---
layout: page
title: "Sisteme de operare si Bash"
permalink: /laboratoare/open-source/sisteme-de-operare-si-bash/
layout: post
date: 2018-02-17 12:00:00
author: "Gabriel Paiu"
excerpt_separator: <!--more-->
---
# Notiuni introductive in Bash

## Despre

Bash (Bourne Again Shell) este un superset al Shell Command Language (SH) care permite o sintaxa mai usoara si mai lizibila si care aduce imbunatatiri. La baza, o comanda bash sau un script bash primeste date de intrare de la un terminal, de la un descriptor de fisier sau dintr-un sir de caractere, apoi ruleaza si produce date de iesire.

In bash nu exista decat variabile ca si structuri de date, care nu pot fi altceva decat siruri de caractere. Orice comanda sau operator care simuleaza alte structuri de date sau tipuri de variabile (de exemplu compararea intregilor sau declararea vectorilor) sunt doar implementari peste siruri de caractere care se pot comporta in anumite situatii ca si vectori sau intregi.

## Sintaxa

Orice script invocat intr-un shell trebuie sa contina la inceput un shebang. Shebang-ul incepe ca un comentariu, cu caracterul diez (#) dar este urmat de un semn de excalamare (!) si programul care va executa secventa de cod ce urmeaza. Fiecare secventa de cod poate fi apelata si in terminal. In cazul Bash, vom folosi ca shebang #!/bin/bash.

```shell
#!/bin/bash
# o variabila este referentiata fara '$' atunci cand se face asignarea
variabila="1"
# o variabila este referentiata cu '$' cand este nevoie de continutul ei
echo $variabila
```

### Compararea variabilelor

```shell
#!/bin/bash
var1="1"
var2="2"

if [[ $var1 -gt $var2 ]]; then
  # -gt sau "greater than"
  echo "$var1 este mai mare decat $var2"
elif [[ $var1 -eq $var2 ]]; then
  # -eq sau "equal"
  echo "Variabilele sunt egale"
else
  echo "$var1 este mai mic decat $var2"
fi
```
```shell
$> ./laborator1.sh
1 este mai mic decat 2
```

Similar pentru siruri de caractere

```shell
if [[ "$var1" == "$var2" ]]; then
  echo "Sirurile sunt identice"
fi
```

Aplicarea conditiilor multiple ( folosind operatorii logici && (si) sau || (sau) )

```shell
if [[ $var1 -gt 0 ]] && [[ $var1 -lt $var2 ]]; then
  echo "$var1 > 0 si $var1 < $var2"
fi
```

### Iterarea

```shell
# sau for i in $(seq 1 5); do
for i in 1 2 3 4 5; do
  echo -n $i;
done
```
```shell
$> ./laborator1.sh
1 2 3 4 5
```

### Parsarea argumentelor

```shell
#!/bin/bash
# Afiseaza toate argumentele primite din linia de comanda
echo $@
```
```shell
$> bash laborator1.sh 1 2 3
1 2 3
```
```shell
#!/bin/bash
# Afiseaza primul si al treilea argument
echo "$1 $3"
```
```shell
bash laborator1.sh 1 2 3
1 3
```

### Input si output

Trimiterea datelor de iesire catre un fisier:
```shell
#!/bin/bash
echo "Primul laborator" > fisier.txt
```

Date de intrare citite din fisier:
```shell
#!/bin/bash
while read line; do
  echo $line
done < fisier.txt
```

### Named pipe 
Permite pasarea datelor de iesire de la o comanda ca date de intrare pentru alta comanda):
```shell
#!/bin/bash
# grep afiseaza liniile care contin text, iar wc le numara
grep "text" fisier.txt | wc -l
```

### Manipularea descriptorilor de fisier
```shell
#!/bin/bash

exec 4>stdout.log
exec 2>error.log
exec 1>&4

echo "Fisier sau terminal?"
echo "Eroare" >&2
```
```shell
$> cat stdout.log
Fisier sau terminal
$> cat error.log
Eroare
```

## Comenzi utile

### ls (list)

```shell
$> ls
courses.tss-yonder.com	laborator1
```
```shell
# Listarea fisierelor din directorul curent, inclusiv cele ascunse
$> ls -la
total 0
drwxr-xr-x   5 gpaiu  staff  160 Feb 12 17:29 .
drwxr-xr-x  18 gpaiu  staff  576 Jan 31 10:28 ..
-rw-r--r--   1 gpaiu  staff    0 Feb 12 17:29 .fisier_ascuns
drwxr-xr-x  23 gpaiu  staff  736 Jan 24 15:48 courses.tss-yonder.com
drwxr-xr-x   5 gpaiu  staff  160 Feb 12 17:26 laborator1

# Afisarea directorului curent, in forma de lista detaliata, fara a lista fisierele
$> ls -ld $(pwd)
drwxr-xr-x  4 gpaiu  staff  128 Feb 12 17:26 /Users/gpaiu/Documents/Work/MLMOS

# Afisarea fisierelor, cu omiterea . si .., cate unul pe linie
$> ls -1A
.fisier_ascuns
courses.tss-yonder.com
laborator1
```

### cd (change directory)

```shell
$> pwd
/Users/gpaiu/Documents/Work/MLMOS
$> cd .. && pwd
/Users/gpaiu/Documents/Work
$> cd /Users/gpaiu/Documents && pwd
/Users/gpaiu/Documents
$> cd && pwd
/Users/gpaiu
$> cd . && pwd
/Users/gpaiu
```

### cp (copy)

```shell
$> cp stdout.log stdout.log.backup
$> ls stdout*
stdout.log		stdout.log.backup
```

### mv (move), rm (remove)

```shell
# Sterge fisierul creat precedent
$> rm -f stdout.log.backup
$> mv stdout.log stdout.log.backup
$> ls stdout*
stdout.log.backup
$> mkdir logs
$> mv stdout.log.backup logs
$> ls logs
stdout.log
```

### grep

```shell
# Cauta aparitia sirului de caractere intr-un fisier
$> grep root /etc/passwd
root:*:0:0:System Administrator:/var/root:/bin/sh
daemon:*:1:1:System Services:/var/root:/usr/bin/false
_cvmsroot:*:212:212:CVMS Root:/var/empty:/usr/bin/false

# Poate fi folosit impreuna cu named pipe
$> cat /etc/passwd | grep root

# Case insensitive
$> grep -i administrator /etc/passwd
root:*:0:0:System Administrator:/var/root:/bin/sh
_cyrus:*:77:6:Cyrus Administrator:/var/imap:/usr/bin/false
_dovecot:*:214:6:Dovecot Administrator:/var/empty:/usr/bin/false

# Suport pentru expresii regulate
$> grep -i "^root:" /etc/passwd
root:*:0:0:System Administrator:/var/root:/bin/sh
```

### cat

```shell
# Afiseaza continutul unui fisier
$> cat fisier.txt
Primul laborator
```

### tail, head

```shell
$> for i in $(seq 1 10); do echo "Linia $i" >> lista.txt; done
$> cat lista.txt
Linia 1
Linia 2
Linia 3
Linia 4
Linia 5
Linia 6
Linia 7
Linia 8
Linia 9
Linia 10
$> head -5 lista.txt
Linia 1
Linia 2
Linia 3
Linia 4
Linia 5
$> tail -3 lista.txt
Linia 8
Linia 9
Linia 10
$> head -7 lista.txt | tail -1
Linia 7
```

## Functii

Program Bash care preia doua argumente, le valideaza sa fie numere intregi si le adauga, printand suma. Programul ilustreaza urmatoarele concepte:
- functii
- variabile locale vs. variabile globale
- compararea unei variabile cu o expresie regulata
- coduri de iesire returnate de functii

```shell
#!/bin/bash

este_intreg() {
  local arg=$1
  [[ $arg =~ ^-?[0-9]+$ ]] && return 0
  return 1
}

argument_valid() {
  local arg=$1
  if [[ "$arg" ]] && este_intreg $arg; then
    return 0
  fi
  echo "Argumentul $arg nu este valid"
  return 1
}

adauga() {
  local arg1=$1
  local arg2=$2

  if argument_valid $arg1 && argument_valid $arg2; then
    sum=$(($arg1+$arg2))
    echo $sum
    return 0
  fi
  return 1
}

usage() {
  echo "$(basename $0) ARGUMENT1 ARGUMENT2"
}

if [[ $# -ne 2 ]]; then
  usage
  exit 1
else
  adauga $1 $2
fi
```

## Exercitii

### Exercitiul 1

Sa se scrie un script Bash care sa compare structurile a doua directoare primite ca argumente din linia de comanda. Doua directoare se considera egale daca contin aceleasi subdirectoare si fisiere.
Hint: Puteti folosi comanda diff

### Exercitiul 2

Se da un fisier .csv (campuri separate prin virgula), cu linii de forma:

server-1.tld.com,10.10.0.1,Apache 2.4,PHP 5,MySQL 5.5

Sa se extraga si afiseze datele in urmatorul format

Host: server-1.tld.com
IP: 10.10.0.1
Web: Apache 2.4
Backend: PHP 5
Database: MySQL 5.5

Hint: Puteti folosi comanda cut

### Exercitiul 3

Sa se scrie un program care gestioneaza backup-uri pentru un fisier primit ca argument.
Gestionare va consta in:
- arhivarea fisierului curent
- arhiva va avea numele fisierului, concatenand data (an, luna, zi, ora, minut, secunda)
- daca exista mai mult decat 3 arhive, cea mai veche dintre ele va fi stearsa si inlocuita de cea noua
