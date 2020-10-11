# Windows 10 LTSC reduce telemetry

1. `Win+R` -> `gpedit.msc`
1. `Computer Configuration` -> `Administrative Templates` -> `Windows Components` -> `Data Collection and Preview Builds` -> `Allow Telemetry`
1. change state to `Enabled`
1. select `0 - Security [Enterprise Only]` in options
1. `Apply`
