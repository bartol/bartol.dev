#!/usr/bin/env bash

cd ~/bartol.dev
git pull
go build -o web
sudo service web restart
cd ~
