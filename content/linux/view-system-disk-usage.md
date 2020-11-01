# View system disk usage

	$ df | awk '$NF=="/"{printf "%d\n",$5}'

