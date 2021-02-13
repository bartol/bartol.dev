% regex

## digit

	\d

or

	[0-9]

## not digit

	\D

## letter

	[a-zA-Z]

## alphanumeric character

	\w

or

	[A-Za-z0-9_]

## non-alphanumeric character

	\W

## whitespace character

	\s

## non-whitespace character

	\S

## any one character

	.

## any number of characters

	.*

## one or more characters

	.+

## optional character

	a?

## literal dot

	\.

## beginning of the line

	^word

## end of the line

	word$

## one word followed by another

	one.*another

## only a, b, or c

	[abc]

## not a, b, or c

	[^abc]

## m repetitions

	a{m}

## m to n repetitions

	a{m,n}

## capture group

	(abc)

## capture sub-group

	(a(bc))

## match abc or def

	(abc|def)

## boundary between a word and a non-word character

	\b

## back referencing

first group:

	\1

second group:

	\2

## decimal numbers

	^-?\d+(,\d+)*(\.\d+(e\d+)?)?$

## html tag names

	<(\w+)

## html tag content

	>([\w\s]*)<

## filenames with specific extension

	(\w+)\.(jpg|png|gif)$

## trim whitespace

	^\s*(.*)\s*$

## url

### protocol

	(\w+)://

### host

	://([\w\-\.]+)

### port

	:(\d+)

## note sources

- <https://regexone.com/>
