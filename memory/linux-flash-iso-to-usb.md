# Linux flash .iso to USB

	$ sudo dd bs=4M if=path/to/file.iso of=/dev/sdX status=progress conv=fsync
