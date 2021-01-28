#!/bin/sh

mkdir out
cp -r static/* notes *.md out

for file in $(find out -name "*.md"); do
	case $file in
	*index.md|*projects.md)
		pandoc $file -o ${file%.md}.html --template layout.html
		;;
	*notes*)
		pandoc $file -o ${file%.md}.html --template layout.html --toc \
			--metadata moddate=$(git log -1 --pretty="format:%as" ${file#out/})
		;;
	*)
		echo $file not handled
		;;
	esac
done

rsync -r --delete --stats out/ root@srv1.bdeak.net:/home/www-data/www.bdeak.net
rm -r out
