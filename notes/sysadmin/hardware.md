# Hardware

# Dell R710 BIOS update

1. Download and burn the [Dell Support Live Image](https://www.dell.com/support/home/us/en/04/Drivers/DriversDetails?driverId=CWF92)
1. Download all of the BIN files you need for updates.
1. Copy the BIN files to a USB flash drive (Fat32 formatted)
1. Boot off of the Live Image DVD
1. Become root "sudo su -"
1. Copy the BIN files from the USB flash drive to "/tmp" directory (can't "chmod" on a Fat32 USB disk)
1. Change to the "/tmp" directory. "cd /tmp"
1. Make the BIN file executable "chmod u+x *.bin"
1. Execute each BIN file. Some require rebooting...

[source](https://old.reddit.com/r/homelab/comments/e6yv72/dell_r710_bios_update_with_proxmox/f9tx5c3/)
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
