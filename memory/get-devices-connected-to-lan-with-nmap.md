# Get devices connected to LAN with nmap

[Get LAN IP](/memory/get-lan-ip)

for example:

	inet 192.168.8.102  netmask 255.255.255.0  broadcast 192.168.8.255

run nmap in ping scanning mode

	$ nmap -sP 192.168.8.0/24
