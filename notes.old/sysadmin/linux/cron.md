# Add cron jobs
	$ crontab -e

# List cron jobs
	$ crontab -l

# Clear cron jobs
	$ crontab -r

# Run command daily
	@daily command

# Run command every 5 minutes
	*/5 * * * * command

# Run command every day at 8
	0 8 * * * command

# Run command every minute
	* * * * * command

# Run command hourly
	@hourly command

# Run command monthly
	@monthly command

# Run command on system startup
	@reboot command

# Run command weekly
	@weekly command
