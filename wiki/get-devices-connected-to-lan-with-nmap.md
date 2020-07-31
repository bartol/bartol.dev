# Get devices connected to LAN with nmap

[Get LAN IP](/wiki/linux/get-lan-ip-address)

for example:

	inet 192.168.8.102  netmask 255.255.255.0  broadcast 192.168.8.255

run nmap in ping scanning mode

	$ nmap -sn 192.168.8.0/24
