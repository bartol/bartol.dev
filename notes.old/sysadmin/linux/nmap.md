# Get devices connected to LAN with nmap

[Get LAN IP](/linux/get-lan-ip-address)

for example:

	inet 192.168.8.102  netmask 255.255.255.0  broadcast 192.168.8.255

run nmap in ping scanning mode

	$ nmap -sn 192.168.8.0/24
# Nmap scan current machine open ports

	$ nmap localhost
# Nmap show service versions

	$ nmap -sV bartol.dev
# Scan open ports with nmap

	$ nmap 192.168.8.102

or

	$ nmap 3.122.183.235

or

	$ nmap bartol.dev
