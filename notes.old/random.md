# Random

# Browser extensions

- uBlock Origin ([Firefox][1], [Chrome][2])
- Facebook Container ([Firefox][3])

[1]: https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/
[2]: https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm
[3]: https://addons.mozilla.org/en-US/firefox/addon/facebook-container/
# Compress .mp4 with FFmpeg

	$  ffmpeg -i input.mp4 -vcodec libx265 -crf 28 output.mp4

[source](https://unix.stackexchange.com/a/38380)
# Convert .mkv to .mp4 with FFmpeg

	$ ffmpeg -i input.mkv -codec copy output.mp4
# Download .mp3 with youtube-dl

	$ youtube-dl --extract-audio --audio-format mp3 URL
# Hack Chrome Dino

Open Console with `Ctrl + Shift + k` and paste following command:

	Runner.prototype.gameOver = function() {}

This command deletes function that would end game when you hit object.
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

# RAM image acquisition

![](/files/ram-image-acquisition-diagram.png)

[source](https://www.fer.unizg.hr/predmet/racfor/materijali#%23!p_rep_84450!_-135668-129615)

# Split video in chunks with FFmpeg

	$ ffmpeg -i input.mp4 -c copy -map 0 -segment_time 00:10:00 -f segment -reset_timestamps 1 output_%03d.mp4

adjust `-segment_time`
# Terminal colors

<https://www.calmar.ws/vim/256-xterm-24bit-rgb-color-chart.html>



## what is

what        | is
----------- | --------
API         | program to program interface
process     | running program

