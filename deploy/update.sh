#!/usr/bin/env bash

cd ~/bartol.dev
git pull -f
go build -o web
sudo systemctl restart web
