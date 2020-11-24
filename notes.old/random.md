# Random


## Audio formats

- FLAC: (1411kbps) lossless compression, best sound quality, large file size
- MP3: (320kbps) lossy compression, good enough sound quality, acceptable file size
- MP3: (128kbps) lossy compression, meh sound quality, small file size
# Allow access with robots.txt

	User-agent: *
	Disallow:

or don't create robots.txt
# ARP poisoning

![](/files/arp-poisoning.png)
# Audio formats

- FLAC: (1411kbps) lossless compression, best sound quality, large file size
- MP3: (320kbps) lossy compression, good enough sound quality, acceptable file size
- MP3: (128kbps) lossy compression, meh sound quality, small file size
# Audio levels

- Dialogue: -6dB
- Music: -22dB

[source](https://www.reddit.com/r/VideoEditing/comments/a06lpz/what_db_should_my_audio_levels_be_at/eaf8v6c/)
# Azbuka

| Ćirilica | Latinica |
|----------|----------|
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
# Basic text editor in browser

create bookmark with this location

	data:text/html,<html contenteditable>
# Block access with robots.txt

	User-agent: *
	Disallow: /
# Boot menu keys

Manufacturer | Key
------------ | -------------
Acer         | Esc, F12, F9
Asus         | Esc, F8
Clevo        | F7
Dell         | F12
Fujitsu      | F12, Esc
HP           | F9, Esc
Lenovo       | F12, F8, F10
MSI          | F11
Samsung      | Esc, F12, F2
Sony         | F11, Esc, F10
Toshiba      | F12
others...    | F12, Esc
# Browser extensions

- uBlock Origin ([Firefox][1], [Chrome][2])
- Facebook Container ([Firefox][3])

[1]: https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/
[2]: https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm
[3]: https://addons.mozilla.org/en-US/firefox/addon/facebook-container/
# Calculate uncompressed JPG image size

	(width × height × 3) / 1048576

- why 3? size of RGB color (24 bits)
- why 1048576? convert bytes to megabytes (1024 × 1024)# Common ports

<https://packetlife.net/media/library/23/common_ports.pdf>
# Common subnets

- `/24` - `255.255.255.0`
- `/16` - `255.255.0.0`
- `/8` - `255.0.0.0`
# Compress .mp4 with FFmpeg

	$  ffmpeg -i input.mp4 -vcodec libx265 -crf 28 output.mp4

[source](https://unix.stackexchange.com/a/38380)
# Convert .mkv to .mp4 with FFmpeg

	$ ffmpeg -i input.mkv -codec copy output.mp4
# Create bootable Windows USB

download media creation tool

<https://www.microsoft.com/en-us/software-download/windows10>
# CSS system font stack

	font-family: system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
# Currency conversion API

source: European Central Bank

<https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml>
# CV vs Resume vs Biography

## CV (Curriculum Vitae)

- Course of life
- Usually longer

## Resume

- Used for job applications
- Shorter, up to 2 pages

## Biography

- Life story
- In narrative form
- Can be general, non-purpose
# Directional vs omnidirectional antenna

![](/files/directional-omnidirectional-antenna.png)
# Download .mp3 with youtube-dl

	$ youtube-dl --extract-audio --audio-format mp3 URL
# Eleventy post excerpt

This is how you get post excerpt in eleventy using nunjucks.

	{{ post.templateContent | striptags(true) | truncate(280) }}

[source](https://github.com/11ty/eleventy/issues/410#issuecomment-465160346)
# Faster Google Fonts

	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" media="print" onload="this.media='all'" />

[source](https://csswizardry.com/2020/05/the-fastest-google-fonts/)
# Fiber tapping

![](/files/fiber-tapping.jpg)

[more info](https://en.wikipedia.org/wiki/Fiber_tapping)
# Find email sender IP address

1. open raw email
2. find last `Received:` header
# Firefox go back/forward shortcut

`Ctrl + {` / `Ctrl + }`
# Firefox pdf reader set default zoom

Open `about:config` in your browser, accept warning and change:

- `pdfjs.defaultZoomValue` set value to `page-fit` or similar
# Firewall vs Router

![](/files/firewall-router.jpg)
# Fix 0909006C PEM error

	const replace = require('lodash.replace')
	const apiKey = replace(process.env.YOUR_API_KEY, new RegExp('\\\\n', 'g'), '\n')

[source](https://github.com/googleapis/google-api-nodejs-client/issues/1110#issuecomment-436868760)
# Fix oversaturated colors in Firefox

Open `about:config` in your browser, accept warning and change few settings.

- `gfx.color_management.display_profile` make sure this one is empty
- `gfx.color_management.enablev4` set value to `true`
- `gfx.color_management.mode` set value to `1`
- `gfx.color_management.rendering_intent` set value to `0`

Restart browser if needed.

[source](https://bugzilla.mozilla.org/show_bug.cgi?id=1250461)
# Get public IP address

	$ curl icanhazip.com
# Hack Chrome Dino

Open Console with `Ctrl + Shift + k` and paste following command:

	Runner.prototype.gameOver = function() {}

This command deletes function that would end game when you hit object.
# Heartbleed vulnerability

![](/files/heartbleed.png)
# HEP cijena struje

- dnevna: 0.84 kn
- noćna: 0.41 kn
# HTTP header fields

<https://en.wikipedia.org/wiki/List_of_HTTP_header_fields>
# HTTP request methods

<https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods>
# HTTP status codes

<https://en.wikipedia.org/wiki/List_of_HTTP_status_codes>
# Huawei B310

- Settings: <http://192.168.8.1>
- Username: `admin`
- Password: `admin`
# Huawei B315s

- Settings: <http://192.168.8.1>
- Username: `admin`
- Password: `admin`
# Huawei HG658 V2

- Settings: <http://192.168.2.1>
- Username: `user`
- Password: last 8 digits of S/N
# Huawei HG8245Q2

- Settings: <http://192.168.100.1>
- Username: `root`
- Password: `adminHW`
# Hub vs Bridge vs Switch

![](/files/hub-bridge-switch.jpg)
# Hyphen vs En dash vs Em dash

- Hyphen (-) - justification, suffix/prefix, joining
- En dash (–) - ranges, relationships, connection
- Em dash (—) - pause in thought, sentence unfinished
# Image formats

- PNG: lossless compression, transparency support, use for anything digitally generated
- JPEG: lossy compression, small file size, use for images viewed by humans
# Link to CSS file

	<link rel="stylesheet" type="text/css" href="/css/main.css" />
# Memory management unit

Koristi se za prevođenje virtualnih memorijskih adresa u fizičke memorijske adrese.

Koristan jer omogučava pokretanje više programa koji koriste istu apsolutnu adresu.

Primjer:

- Program 1 - započinje na adresi `0x2020`
- Program 2 - započinje na adresi `0x2020`

Procesor pokreće Program 1 i šalje zahtjev za vrijedost početne adrese MMU-u.
MMU mu odgovara sa vrijednosti neke fizičke adrese npr. `0x1234` koja ovisi o
kontekstu (koji program je pokrenut, itd.). Program 2 koji traži istu memorijsku
adresu dobiti će vrijednost neke druge fizičke adrese npr. `0x4321`.
# MIME type syntax

	type/subtype; [parameter]
# MySQL backup and restore

backup:

	$ mysqldump --all-databases > backup.sql

restore:

	$ mysql < backup.sql
# Namecheap dynamic dns

enable ddns:

`Domain -> Advanced DNS -> Dynamic DNS` switch to ON

add new record:

- set type to `A+ Dynamic DNS Record`
- set value to `192.168.1.1`

install ddns client:

	$ sudo apt install ddclient

add record to `/etc/ddclient.conf`:

	use=web, web=checkip.dyndns.com/, web-skip='IP Address'
	protocol=namecheap
	server=dynamicdns.park-your-domain.com
	login=DOMAIN
	password='NAMECHEAP_DDNS_PASSWORD'
	srv2

force record update:

	$ sudo rm /var/cache/ddclient/ddclient.cache
	$ sudo ddclient
# Nested scaffold in Rails

	$ bin/rails generate scaffold admin/user name:string
# Networking cable types

## Coaxial

![](/files/networking-cable-types/coax.jpg)

## Twisted pair

- UTP - **U**nshielded **T**wisted **P**air
- STP - **S**hielded **T**wisted **P**air

![](/files/networking-cable-types/twisted-pair.jpg)

Cat5e, Cat6,...

## Fiber optics

![](/files/networking-cable-types/fiber-optics.png)
# Numeronyms

- i18n - internationalization
- l10n - localization
- a11y - accessibility
- k8s - kubernetes
# Nunjucks recursive loop

Nunjucks does not have recursive loop option by default but you can create it
using simple macro.

	{% macro link_to_file(file) %}
		<li>
			{% if file.children %}
			<strong>{{ file.name }}/</strong>
			<ul>
				{% for file in file.children %}
				{{ link_to_file(file) }}
				{% endfor %}
			</ul>
			{% else %}
			<a href="/{{ file.path }}" >{{ file.name }}</a>
			{% endif %}
		</li>
	{% endmacro %}

	<div class="tree">{{ link_to_file(files) }}</div>

[source](https://github.com/mozilla/nunjucks/issues/416#issuecomment-206335032)
# Open VS Code from shell

	$ code .
# Port states

- Open: port accessible, application listening on it
- Closed: port accessible, no application listening on it, may mean that there is no firewall
- Filtered: blocked by firewall

![](/files/syn-handshake.png)
# Post to HN shortcut

create bookmark with this location

	javascript: window.location = "https://news.ycombinator.com/submitlink?u=" + encodeURIComponent(document.location) + "&t=" + encodeURIComponent(document.title)# Puppeteer take screenshot of webpage

	const puppeteer = require("puppeteer")

	(async () => {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();

		await page.goto("https://bartol.dev")
		await page.screenshot({ path: "webpage.png" })

		await browser.close()
	})();
# RAM image acquisition

![](/files/ram-image-acquisition-diagram.png)

[source](https://www.fer.unizg.hr/predmet/racfor/materijali#%23!p_rep_84450!_-135668-129615)
# React count characters in input

	import React, { useState } from 'react'

	export default () => {
		const [characters, setCharacters] = useState(0)

		return (
			<div>
				<textarea onChange={e => setCharacters(e.target.value.split('').length)} />
				{characters}
			</div>
		)
	}
# React provider composer

	const ProviderComposer = ({ contexts, children }) => {
		return contexts.reduceRight(
			(kids, parent) =>
				React.cloneElement(parent, {
					children: kids,
				}),
			children
		)
	}# Recursive acronyms

- GNU (GNU's Not Unix)
- PHP (PHP: Hypertext Preprocessor)
- cURL (Curl URL Request Library)
- PIP (PIP Installs Packages)
# Remove Apps from Chrome bookmark bar

Right click on it and uncheck Show Apps Shortcut option.
# Remove underline from HTML link

This is so simple, yet I always forget how to do it.

	a {
		text-decoration: none;
	}

Get it back on hover:

	a:hover {
		text-decoration: underline;
	}
# Reset HTML form state

	<input type="reset">
# Responsive HTML email template

	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
		<head>
			<title>SUBJECT</title>
			<style type="text/css">
			body {margin: 0; padding: 0; min-width: 100%!important;}
			.content {width: 100%; max-width: 600px;}
			</style>
		</head>
		<body bgcolor="BG_COLOR">
			<table width="100%" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td>
						<table class="content" align="center" cellpadding="0" cellspacing="0" border="0">
							<tr>
								<td>
									CONTENT
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</body>
	</html>
# Search fish completions

`Shift + Tab`
# Show website layout

create bookmark with this location

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

[source](https://gist.github.com/vcastroi/e0d296171842e74ad7d4eef7daf15df6#gistcomment-3017296)# Sign in to all Slack workspaces

<https://slack.com/get-started#find>
# Simplex vs Half-duplex vs Full-duplex

![](/files/simplex-halfduplex-fullduplex.jpg)
# Split video in chunks with FFmpeg

	$ ffmpeg -i input.mp4 -c copy -map 0 -segment_time 00:10:00 -f segment -reset_timestamps 1 output_%03d.mp4

adjust `-segment_time`
# Što znači d.d.?

Dioničko društvo

[više info](https://hr.wikipedia.org/wiki/Dioni%C4%8Dko_dru%C5%A1tvo)
# Što znači d.o.o.?

Društvo s ograničenom odgovornošću

[više info](https://hr.wikipedia.org/wiki/Dru%C5%A1tvo_s_ograni%C4%8Denom_odgovorno%C5%A1%C4%87u)
# Što znači j.d.o.o.?

Jednostavno društvo s ograničenom odgovornošću
# SYN stealth scan

connection not established, request not logged

![](/files/stealth-port-scan.png)
# TCP vs UDP

![](/files/tcp-udp.svg)
# Teardrop attack

![](/files/teardrop-attack.jpg)
# Terminal colors

<https://www.calmar.ws/vim/256-xterm-24bit-rgb-color-chart.html>

<https://web.archive.org/web/20191023185850/https://www.calmar.ws/vim/256-xterm-24bit-rgb-color-chart.html>
# URL syntax

	<scheme>://<user>:<pass>@<host>:<port>/<path>?<query>#<fragment>
# View web page in Wayback Machine shortcut

create bookmark with this location

	javascript: window.location = "https://web.archive.org/web/*/" + window.location
# Visual block mode in Kakoune

`Shift + c`
# What Bcc means?

**B**lind **c**arbon **c**opy
# What Cc means?

**C**arbon **c**opy
# What is a MAC address?

unique identifier assigned to a network interface controller
# What is an API?

(**A**pplication **P**rogramming **I**nterface)

program to program interface
# What is a process?

running program
# What is ARP?

(**A**ddress **R**esolution **P**rotocol)

maps IP addresses to MAC addresses

helps resolve an address of a specific computer in the ethernet network
# What is Dark web?

web accessible only using special protocols/tools/configuration

(tor, ...)
# What is Deep web?

web not visible to search crawlers

(password protected content, page which isn't linked from anywhere, ...)
# What is DHCP?

(**D**ynamic **H**ost **C**onfiguration **P**rotocol)

used to dynamically assign IP addresses to devices on an network
# What is DNS?

(**D**omain **N**ame **S**ystem)

maps domains to IP addresses
# What is LLC?

Limited liability company

[more info](https://en.wikipedia.org/wiki/Limited_liability_company)
# What is Surface web?

web visible to search crawlers

(news sites, web shops, social networs, wikipedia, ...)
