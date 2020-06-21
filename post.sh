#!/usr/bin/env bash

title=$1
file=memory/$(echo ${title,,} | sed -E "s/( |\.)/-/g" | sed -E "s/'//g").md

echo "#" $title > $file
echo >> $file
echo >> $file
vi "+norm G" +startinsert $file
