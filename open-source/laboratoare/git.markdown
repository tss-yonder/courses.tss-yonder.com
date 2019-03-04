---
title: "Git"
permalink: /open-source/laboratoare/git/
group: 'open-source'
layout: post
color: pink
icon: fab fa-osi
date: 2019-03-04 12:00:00
author: "Alexandru Coman"
excerpt_separator: <!--more-->
---

## Resurse necesare

### Un cont de utilizator pe GitHub

Pentru a putea propune soluțiile pe care le elaborați veți avea nevoie de un cont de utilizator pe [github.com][3].
Mai multe detalii despre acest pas putem găsi în tutorialul introductiv despre git în secțiunea [1. Crearea contului GitHub.][4]

### Utilitarul git

În cazul în care nu aveți instalat în cadrul sistemului vostru acest utilitar puteți să urmați pașii din tutorialul intoductiv despre git din secțiunea [3. Instalarea și configurarea GitHub for Windows][0].

Pentru aceia dintre voi care preferă interacțiunea cu *git* din linia de comandă puteți descărca utilitarul de pe situl [git-scm][1] sau îl puteți instala folosind managerul de pachete din sistemul de operare folosit.

```bash
~ $ sudo apt-get install git-all  # Debian
~ $ sudo yum install git-all      # Fedora
~ $ choco install git             # Windows
```
Mai multe detalii și exemple pot fi găsite [aici][2].

## Exerciții

### Noțiuni introductive de git

La următoarea adresă [try.github.io][5] aveți la dispoziție un scurt tutorial despre cele mai uzuale noțiuni și proceduri de lucru cu un sistem de versionare a codului.

### git branch

Pentru laborator vă invităm să încercaţi să parcurgeţi primele 4 nivele introductive din tutorialul interactiv [learngitbranching.js.org][6]. Acest tutorial interactiv vă poate ajuta să vizualizaţi mai bine acţiunile şi parcursul logic al unul repository git.  

- Primul nivel va prezenta mai detaliat acţiunea de git [commit](https://guides.github.com/introduction/git-handbook/#basic-git)  
- Al doilea nivel ne va prezenta conceptul de git [branch](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)  
- Al treilea nivel va intra în detaliu pentru a ne prezenta cum putem combina mai multe surse de date într-o structure comună prin git [merge](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)  
- Al patrulea nivel ne va familiariza cu un concept puţin mai dificil, dar util in momentele în care vrem să ne suprascriem parcursul local de git cu dintr-o sursă externă - git [rebase](https://git-scm.com/docs/git-rebase)  

Va recomandăm să incercaţi sa parcurgeţi aceste prime nivele pentru a vă familiariza cu 


[0]: {{ site.baseurl }}/resurse/tutorial/git/notiuni-introductive/#instalarea-și-configurarea-github-for-windows
[1]: https://git-scm.com/downloads
[2]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[3]: https://github.com/
[4]: {{ site.baseurl }}/resurse/tutorial/git/notiuni-introductive/#crearea-contului-github
[5]: https://try.github.io/
[6]: https://learngitbranching.js.org
