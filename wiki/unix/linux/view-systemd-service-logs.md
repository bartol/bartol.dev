# View systemd service logs

	journalctl -u nginx.service

only today's logs:

	journalctl -u nginx.service --since today

multiple services:

	journalctl -u nginx.service -u api.service --since today
