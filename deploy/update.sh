#!/usr/bin/env bash

source .profile
cd bartol.dev
git pull
go build -o web
sudo systemctl restart web
