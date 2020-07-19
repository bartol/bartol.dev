# Web server systemd service

`/lib/systemd/system/name.service`

	[Unit]
	Description=www

	[Service]
	Type=simple
	Restart=on-failure
	Environment="PASSWORD=xxxxxxxxxxxx"
	WorkingDirectory=/home/bartol/bartol.dev
	ExecStart=/home/bartol/bartol.dev/server.py

	[Install]
	WantedBy=multi-user.target
