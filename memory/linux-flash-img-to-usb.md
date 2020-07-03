# Linux flash .img to USB

	$ sudo dd bs=4M if=path/to/file.img of=/dev/sdX status=progress conv=fsync
