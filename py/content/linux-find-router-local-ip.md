# Linux find router local IP

	$ ip route | grep "default via" | awk '{print $3}'
