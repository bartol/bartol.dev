# Get LAN IP address

	$ ifconfig | grep "inet " | grep -v "127.0.0.1" | awk '{print $2}'

with more info (subnet, etc.):

	$ ifconfig | grep "inet " | grep -v "127.0.0.1"
