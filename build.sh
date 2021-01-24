#!/bin/sh

mkdir out
cp -r static/* notes index.md out
for file in $(find out -name "*.md"); do
	pandoc $file -o ${file%.md}.html \
		--template layout.html \
		--metadata title="$(head -1 $file | cut -c3-)"
done

rsync -r --delete --stats out/ root@srv1.bdeak.net:/home/www-data/www.bdeak.net
rm -r out
