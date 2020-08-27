# SSH tunneling

ssh to `pc` proxied through `rpi` that has public ip address

	Host rpi
		User pi
		Hostname (public ip)

	Host pc
		ProxyJump rpi
		User bartol
		Hostname (local ip)
