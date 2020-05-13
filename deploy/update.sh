#!/usr/bin/env bash

cd ~/bartol.dev
git reset --hard HEAD
git pull
go build -o web
sudo systemctl restart web
