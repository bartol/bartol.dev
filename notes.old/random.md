# Random

# Allow access with robots.txt

	User-agent: *
	Disallow:

or don't create robots.txt
# ARP poisoning

![](/files/arp-poisoning.png)
# Block access with robots.txt

	User-agent: *
	Disallow: /
# Browser extensions

- uBlock Origin ([Firefox][1], [Chrome][2])
- Facebook Container ([Firefox][3])

[1]: https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/
[2]: https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm
[3]: https://addons.mozilla.org/en-US/firefox/addon/facebook-container/
# Common ports

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
# Directional vs omnidirectional antenna

![](/files/directional-omnidirectional-antenna.png)
# Download .mp3 with youtube-dl

	$ youtube-dl --extract-audio --audio-format mp3 URL

[source](https://csswizardry.com/2020/05/the-fastest-google-fonts/)
# Fiber tapping

![](/files/fiber-tapping.jpg)

[more info](https://en.wikipedia.org/wiki/Fiber_tapping)
# Find email sender IP address

1. open raw email
2. find last `Received:` header
# Firewall vs Router

![](/files/firewall-router.jpg)
# Hack Chrome Dino

Open Console with `Ctrl + Shift + k` and paste following command:

	Runner.prototype.gameOver = function() {}

This command deletes function that would end game when you hit object.
# Heartbleed vulnerability

![](/files/heartbleed.png)
# Hub vs Bridge vs Switch

![](/files/hub-bridge-switch.jpg)
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
# Namecheap dynamic dns

enable ddns:

`Domain -> Advanced DNS -> Dynamic DNS` switch to ON

add new record:

- set type to `A+ Dynamic DNS Record`
- set value to `192.168.1.1`

install ddns client:

	$ sudo apt install ddclient

add record to `/etc/ddclient.conf`:

	use=web, web=icanhazip.com
	protocol=namecheap
	server=dynamicdns.park-your-domain.com
	login=DOMAIN
	password='NAMECHEAP_DDNS_PASSWORD'
	srv2

force record update:

	$ sudo rm /var/cache/ddclient/ddclient.cache
	$ sudo ddclient
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
# Port states

- Open: port accessible, application listening on it
- Closed: port accessible, no application listening on it, may mean that there is no firewall
- Filtered: blocked by firewall

![](/files/syn-handshake.png)

# RAM image acquisition

![](/files/ram-image-acquisition-diagram.png)

[source](https://www.fer.unizg.hr/predmet/racfor/materijali#%23!p_rep_84450!_-135668-129615)

# Sign in to all Slack workspaces

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
