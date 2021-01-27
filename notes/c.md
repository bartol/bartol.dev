% c

## assert with message

	assert(<condition> && "<message>");

for unreachable branches:

	assert(!"<message>");

[source](https://news.ycombinator.com/item?id=25182491)

## named parameters

	struct calculate_args {
		int x, y;
		enum {add=0, sub} operator;
	};

	int calculate_func(struct calculate_args args) {
		if (args.operator == add)
			return args.x + args.y;
		else
			return args.x - args.y;
	}

	#define calculate(...) calculate_func((struct calculate_args){__VA_ARGS__})

usage:

	calculate(1, 3); // 4
	calculate(8, 3, .operator=sub); // 5
	calculate(.operator=sub, .y=7); // -7

[source](https://news.ycombinator.com/item?id=25178132)

## infinite loop

	for(;;)
	{

	}

or

	while(1)
	{

	}

## colors in printf output

color   | escape code
------- | ------------
red     | `\x1b[31m`
green   | `\x1b[32m`
yellow  | `\x1b[33m`
blue    | `\x1b[34m`
magenta | `\x1b[35m`
cyan    | `\x1b[36m`
reset   | `\x1b[0m`

example:

	#include <stdio.h>

	int main () {
		printf("\x1b[36mhey\033[0m!");
		return 0;
	}
