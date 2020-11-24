#!/usr/bin/env bash

mkdir out
cp -r static/* notes index.md out
for file in $(find out -name "*.md"); do
  file_out=${file%.md}.html
  pandoc $file -o $file_out \
    --template layout.html \
    --metadata title="$(head -1 $file | cut -c3-)"
  echo $file_out
done

#rsync -r --delete out/ srv1:/home/www-data/www.bdeak.net
rm -r out