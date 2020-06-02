#!/usr/bin/env bash

cd ~/bartol.dev
git reset --hard HEAD
git pull
go build -o www
sudo systemctl restart www
