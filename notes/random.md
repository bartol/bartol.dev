% random

## audio formats

- FLAC: (1411kbps) lossless compression, best sound quality, large file size
- MP3: (320kbps) lossy compression, good enough sound quality, acceptable file size
- MP3: (128kbps) lossy compression, meh sound quality, small file size

## image formats

- PNG: lossless compression, transparency support, use for anything digitally generated
- JPEG: lossy compression, small file size, use for images viewed by humans

## Download music

one time setup:

	$ pip install deemix

1. register [here](https://www.deezer.com/us/register) with [this](https://temp-mail.org/)
2. open storage dev tools: `Shift + F9` (Firefox)
3. click on `Cookies` and then `Cookies` in sidebar
4. find `arl` in list and copy its value

for every download:

1. find song [here](https://open.spotify.com/search)
2. Right click on it and then `Share` and `Copy Song Link`

change command parameters as needed

	$ deemix -b 320 -p ~/stuff/music <url>

## Windows and Office activation

<https://github.com/massgravel/Microsoft-Activation-Scripts/releases>

[archived](https://web.archive.org/web/20201204023249/https://github.com/massgravel/Microsoft-Activation-Scripts/releases)

## Sign in to all Slack workspaces

<https://slack.com/get-started#find>

## Azbuka

| Ćirilica | Latinica |
| -------- | -------- |
| А а      | A a      |
| Б б      | B b      |
| В в      | V v      |
| Г г      | G g      |
| Д д      | D d      |
| Ђ ђ      | Đ đ      |
| Е е      | E e      |
| Ж ж      | Ž ž      |
| З з      | Z z      |
| И и      | I i      |
| Ј ј      | J j      |
| К к      | K k      |
| Л л      | L l      |
| Љ љ      | Lj lj    |
| М м      | M m      |
| Н н      | N n      |
| Њ њ      | Nj nj    |
| О о      | O o      |
| П п      | P p      |
| Р р      | R r      |
| С с      | S s      |
| Т т      | T t      |
| Ћ ћ      | Ć ć      |
| У у      | U u      |
| Ф ф      | F f      |
| Х х      | H h      |
| Ц ц      | C c      |
| Ч ч      | Č č      |
| Џ џ      | Dž dž    |
| Ш ш      | Š š      |

## CARNet @skole.hr email postavke za desktop klijent

- Dolazne postavke: IMAP imap.skole.hr 143 STARTTLS
- Odlazne postavke: SMTP smtp.skole.hr 587 STARTTLS

## HEP cijena struje

- dnevna: 0.84 kn
- noćna: 0.41 kn

## pocetak programiranja

ljeto 2018

## skracenice

skracenica | znacenje
---------- | ------------------
i18n       | internationalization
l10n       | localization
a11y       | accessibility
k8s        | kubernetes
GNU        | GNU's Not Unix
PHP        | PHP: Hypertext Preprocessor
cURL       | Curl URL Request Library
PIP        | PIP Installs Packages
bcc        | blind carbon copy
cc         | carbon copy
API        | application programming interface
ARP        | address resolution protocol
DHCP       | dynamic host configuration protocol
DNS        | domain name system
LLC        | limited liability company
d.d.       | dioničko društvo
d.o.o.     | društvo s ograničenom odgovornošću
j.d.o.o.   | jednostavno društvo s ograničenom odgovornošću

## Hack Chrome Dino

Open Console with `Ctrl + Shift + k` and paste following command:

	Runner.prototype.gameOver = function() {}

This command deletes function that would end game when you hit object.

## Terminal colors

<https://www.calmar.ws/vim/256-xterm-24bit-rgb-color-chart.html>

## libreoffice calc freeze rows

right click on colum number for column below one you want to freeze and check freeze option

## Namecheap dynamic dns

enable ddns:

`Domain -> Advanced DNS -> Dynamic DNS` switch to ON

add new record:

- set type to `A+ Dynamic DNS Record`
- set value to `192.168.1.1`

install ddns client:

	# apt install ddclient

add record to `/etc/ddclient.conf`:

	use=web, web=icanhazip.com
	protocol=namecheap
	server=dynamicdns.park-your-domain.com
	login=<domain>
	password='<ddns-password>'
	<subdomain>

force record update:

	# rm /var/cache/ddclient/ddclient.cache
	# ddclient

## browser bookmarks

### Show website layout

	javascript: (function() {
		const element = document.querySelector('#test-layout-styles');
		if (element) {
			document.head.removeChild(element);
		} else {
			const style = document.createElement('style');
			style.id = 'test-layout-styles';
			style.innerHTML = `
				* { background-color: rgba(255,0,0,.2); }
				* * { background-color: rgba(255,0,255,.2); }
				* * * { background-color: rgba(0,255,255,.2); }
				* * * * { background-color: rgba(255,255,0,.2); }
				* * * * * { background-color: rgba(0,255,0,.2); }
				* * * * * * { background-color: rgba(0,0,255,.2); }
				* * * * * * * { background-color: rgba(255,0,0,.2); }
				* * * * * * * * { background-color: rgba(255,255,0,.2); }
				* * * * * * * * * { background-color: rgba(0,255,255,.2); }
			`;
			document.head.appendChild(style);
		}
	})();

[source](https://gist.github.com/vcastroi/e0d296171842e74ad7d4eef7daf15df6#gistcomment-3017296)

### View web page in Wayback Machine

	javascript: window.location = "https://web.archive.org/web/*/" + window.location

### translate page

	javascript: window.location = "https://translate.google.com/translate?sl=en&tl=hr&u=" + encodeURIComponent(document.location)

### Post to HN

	javascript: window.location = "https://news.ycombinator.com/submitlink?u=" + encodeURIComponent(document.location) + "&t=" + encodeURIComponent(document.title)

## browser extensions

- [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
- [KeePassXC-Browser](https://addons.mozilla.org/en-US/firefox/addon/keepassxc-browser/)
- [Facebook Container](https://addons.mozilla.org/en-US/firefox/addon/facebook-container/)

### uBlock Origin

#### remove youtube distractions

add to `My filters`

	www.youtube.com###secondary
	www.youtube.com###comments

## delete github repository deployments

	#!/bin/sh
	token=<token>
	repo=<repo>
	user=<user>

	for id in $(curl -u $user:$token https://api.github.com/repos/$user/$repo/deployments | jq ".[].id"); do
	    curl -X POST -u $user:$token -d '{"state":"inactive"}' -H 'accept: application/vnd.github.ant-man-preview+json' https://api.github.com/repos/$user/$repo/deployments/$id/statuses
	    curl -X DELETE -u $user:$token https://api.github.com/repos/$user/$repo/deployments/$id
	done

[source](https://stackoverflow.com/a/62477591)
