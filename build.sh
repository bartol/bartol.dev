#!/bin/sh

mkdir out
cp -r static/* notes index.md out
for file in $(find out -name "*.md"); do
	pandoc $file -o ${file%.md}.html -s \
		--template layout.html --toc \
		--metadata moddate=$(git log -1 --pretty="format:%as" ${file#out/})
done

rsync -r --delete --stats out/ root@srv1.bdeak.net:/home/www-data/www.bdeak.net
rm -r out
