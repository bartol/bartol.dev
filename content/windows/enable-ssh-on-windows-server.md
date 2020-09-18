# Enable SSH on Windows server

open powershell as administrator

    C:\> Get-WindowsCapability -Online | ? Name -like 'OpenSSH*'
    C:\> Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
    C:\> Start-Service sshd
    C:\> Set-Service -Name sshd -StartupType 'Automatic'

