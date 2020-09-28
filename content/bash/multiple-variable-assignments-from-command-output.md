# Multiple variable assignments from command output

	read day month year <<< $(date +'%d %m %y')

	echo $day
	echo $month
	echo $year
