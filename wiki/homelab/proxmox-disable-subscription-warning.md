# Proxmox disable subscription warning

enter server console and run:

	# sed -i.bak "s/data.status !== 'Active'/false/g" /usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js
	# systemctl restart pveproxy.service
