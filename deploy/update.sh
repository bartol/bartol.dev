#!/usr/bin/env bash

cd ~/bartol.dev
git pull
go build -o web
sudo systemctl restart web
