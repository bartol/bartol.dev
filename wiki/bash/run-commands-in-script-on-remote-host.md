# Run commands in script on remote host

	ssh srv1 <<EOF
	uptime
	df -h
	EOF
