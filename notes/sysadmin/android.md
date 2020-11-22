# Android


## Android extract apk from installed application

download [Apk Extractor](https://play.google.com/store/apps/details?id=com.ext.ui)

open it and click on app you want to extract apk from

find apk in `[internal storage]/ExtractedApks`


## Decompile apk

on debian:

	$ sudo apt install apktool
	$ apktool d App_base.apk

directory `App_base` will be created