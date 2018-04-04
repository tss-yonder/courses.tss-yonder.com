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
- OS Firewall
- Interactiuni prin SSH

## Recapitulare - VM networking
https://www.virtualbox.org/manual/ch06.html#networkingmodes
![vm_network_adapters](/{{ "assets/images/courses/recap_31.png" | prepend: site.baseurl }} ){:height="90%" width="90%"}

## Recapitulare - VM networking
![adapter_diagram](/{{ "assets/images/courses/recap_41.png" | prepend: site.baseurl }}){:height="90%" width="90%"}

## Recapitulare - OS Networking
http://linuxtechlab.com/configure-ip-address-rhel-centos/
![client_config](/{{ "assets/images/courses/recap_51.png" | prepend: site.baseurl }}){:height="90%" width="90%"}

## Recapitulare - OS Management pachete
![yum1](/{{ "assets/images/courses/recap_61.png" | prepend: site.baseurl }}){:height="90%" width="90%"}

## Recapitulare - OS Management pachete
![yum2](/{{ "assets/images/courses/recap_62.png" | prepend: site.baseurl }}){:height="90%" width="90%"}

## Recapitulare - OS Management pachete
https://docs.docker.com/install/linux/docker-ce/centos/#install-using-the-repository
![repo_files](/{{ "assets/images/courses/recap_71.png" | prepend: site.baseurl }}){:height="90%" width="90%"}

## Recapitulare – Procese si servicii
![top](/{{ "assets/images/courses/recap_81.png" | prepend: site.baseurl }}){:height="90%" width="90%"}

## Recapitulare – Procese si servicii
![nestat](/{{ "assets/images/courses/recap_82.png" | prepend: site.baseurl }}){:height="90%" width="90%"}

## Recapitulare - Firewall
https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-centos-7
![firewalld](/{{ "assets/images/courses/recap_91.png" | prepend: site.baseurl }}){:height="90%" width="90%"}

## Recapitulare – How to SSH
ssh [remote_host]
ssh [remote_username]@[remote_host]

- In caz de probleme – verificati conectivitatea sau tipul de network adapter folosit (in caz de VM) 
- Fisier de configurari - /etc/ssh/sshd_config
- Starea serviciului - systemctl status sshd
- Binding pe port – netstat -ntpl

https://www.digitalocean.com/community/tutorials/how-to-use-ssh-to-connect-to-a-remote-server-in-ubuntu

## Mulțumim!
