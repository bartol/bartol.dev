#!/usr/bin/env bash

./generate.py

rsync -r --delete out/ srv1:/home/www-data/www.bdeak.net
rm -r out
