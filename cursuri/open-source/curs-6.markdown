---
title: "Curs 6"
permalink: /cursuri/open-source/curs-6/
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
- Recapitulare generala
- VM networking
- OS Networking
- OS Management pachete
- OS Procese si servicii
- OS Firewalls
- Interactiuni prin SSH

## Recapitulare - VM networking
https://www.virtualbox.org/manual/ch06.html#networkingmodes

[poza slide 3]

## Recapitulare - VM networking
[poza slide 4]

## Recapitulare - OS Networking
http://linuxtechlab.com/configure-ip-address-rhel-centos/
[poza slide 5]

## Recapitulare - OS Management pachete
http://linuxtechlab.com/configure-ip-address-rhel-centos/
[poza slide 6]

## Recapitulare - OS Management pachete
https://docs.docker.com/install/linux/docker-ce/centos/#install-using-the-repository
[poza slide 7]

## Recapitulare – Procese si servicii
[poza slude 8]

## Recapitulare - Firewall
https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-centos-7
[poza slide 9]

## Recapitulare – How to SSH
ssh [remote_host]
ssh [remote_username]@[remote_host]

- In caz de probleme – verificati conectivitatea sau tipul de network adapter folosit (in caz de VM) 
- Fisier de configurari - /etc/ssh/sshd_config
- Starea serviciului - systemctl status sshd
- Binding pe port – netstat -ntpl

https://www.digitalocean.com/community/tutorials/how-to-use-ssh-to-connect-to-a-remote-server-in-ubuntu

## Mulțumim!
