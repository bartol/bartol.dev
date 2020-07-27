# Linux find router local IP address

	$ ip route | grep "default via" | awk '{print $3}'
