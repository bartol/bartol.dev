#!/usr/bin/env bash

cd ~/bartol.dev
gunicorn -w 4 -b 127.0.0.1:8080 server:wsgiapp