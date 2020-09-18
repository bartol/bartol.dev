# Dell R710 fan control

	# 0%
	$ ipmitool -I lanplus -H 192.168.100.202 -U IDRAC_USERNAME -P IDRAC_PASSWORD raw 0x30 0x30 0x02 0xff 0x00

	# 10%
	$ ipmitool -I lanplus -H 192.168.100.202 -U IDRAC_USERNAME -P IDRAC_PASSWORD raw 0x30 0x30 0x02 0xff 0x0A

	# 20%
	$ ipmitool -I lanplus -H 192.168.100.202 -U IDRAC_USERNAME -P IDRAC_PASSWORD raw 0x30 0x30 0x02 0xff 0x14

	# 30%
	$ ipmitool -I lanplus -H 192.168.100.202 -U IDRAC_USERNAME -P IDRAC_PASSWORD raw 0x30 0x30 0x02 0xff 0x1e

	# 50%
	$ ipmitool -I lanplus -H 192.168.100.202 -U IDRAC_USERNAME -P IDRAC_PASSWORD raw 0x30 0x30 0x02 0xff 0x32

[source](https://www.spxlabs.com/blog/2019/3/16/silence-your-dell-poweredge-server)
