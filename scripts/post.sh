#!/usr/bin/env bash

title=$1
path=$2
file=memory/$path/$(echo ${title,,} | sed -E "s/( |\/)/-/g" | sed -E "s/('|\.|,|\?)//g").md

echo "#" $title > $file
echo >> $file
echo >> $file
vi "+norm G" +startinsert $file
