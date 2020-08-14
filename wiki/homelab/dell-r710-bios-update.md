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
