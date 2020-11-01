# View system disk usage

	$ df | awk '$NF=="/"{print 0+$5}'

