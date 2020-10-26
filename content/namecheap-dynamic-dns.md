# Namecheap dynamic dns

enable:

`Domain -> Advanced DNS -> Dynamic DNS` switch to ON

add new record:

set type to `A+ Dynamic DNS Record`
set value to `192.168.1.1`

install ddns client:

	$ sudo apt install ddclient

add record to `/etc/ddclient.conf`:

	use=web, web=checkip.dyndns.com/, web-skip='IP Address'
	protocol=namecheap
	server=dynamicdns.park-your-domain.com
	login=NAMECHEAP_DOMAIN
	password='NAMECHEAP_DDNS_PASSWORD'
	srv2

force record update:

	$ sudo rm /var/cache/ddclient/ddclient.cache
	$ sudo ddclient
