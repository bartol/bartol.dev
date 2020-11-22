# Activate Windows 10 and Office

<https://web.archive.org/web/20201010022920/https://github.com/massgravel/Microsoft-Activation-Scripts/releases>
# Enable SSH on Windows server

open powershell as administrator

    C:\> Get-WindowsCapability -Online | ? Name -like 'OpenSSH*'
    C:\> Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
    C:\> Start-Service sshd
    C:\> Set-Service -Name sshd -StartupType 'Automatic'

# List directory content in Windows CMD

	C:\> dir
# Transfer files from Windows server

[Enable SSH on Windows server](/windows/enable-ssh-on-windows-server)

then

	C:\> scp bartol@192.168.100.28:todo.txt .

will transfer file `C:\Users\bartol\todo.txt` to current directory
# Transfer files to Windows server

[Enable SSH on Windows server](/windows/enable-ssh-on-windows-server)

then

	C:\> scp todo.txt bartol@192.168.100.28:

will create `C:\Users\bartol\todo.txt`
# View file in Windows CMD

	C:\> type todo.txt
# Windows 10 LTSC reduce telemetry

1. `Win+R` -> `gpedit.msc`
1. `Computer Configuration` -> `Administrative Templates` -> `Windows Components` -> `Data Collection and Preview Builds` -> `Allow Telemetry`
1. change state to `Enabled`
1. select `0 - Security [Enterprise Only]` in options
1. `Apply`
# Windows server find LAN IP address

	C:\> ipconfig
