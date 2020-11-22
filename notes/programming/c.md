# C

# C infinite loop

	for(;;)
	{

	}

or

	while(1)
	{

	}

# C undefine symbolic constant

	#undef NAME

# C write to stderr

	fprintf(stderr, "err!\n");

# Colorful printf output in C

	RED     | "\x1b[31m"
	GREEN   | "\x1b[32m"
	YELLOW  | "\x1b[33m"
	BLUE    | "\x1b[34m"
	MAGENTA | "\x1b[35m"
	CYAN    | "\x1b[36m"
	RESET   | "\x1b[0m"

example:

	#include <stdio.h>

	int main () {
	  printf("\x1b[36mhey\033[0m!");

	  return 0;
	}

# Compile C program

on debian:

    $ sudo apt install gcc
	$ gcc program.c -o program
	$ ./program

# Float fraction digits in C

	#include <stdio.h>

	int main () {
		float pi;
		pi = 3.1415;

		printf("%.2f", pi);

		return 0;
	}

output: `3.14`

# i++ and ++i

- post increment (`i++`) - returns the value, then increments it
- pre increment (`++i`) - increments the value, then returns it

# Number width in C

	#include <stdio.h>

	int main () {
		int num = 16;

		printf("%5d\n", num);

		return 0;
	}

# Run system command from C

	#include <stdlib.h>

	int main()
	{
		system("ls -la");
		return 0;
	}

# Symbolic constants in C

	#define NAME value

- variable that won't change
- saves variable initialization resources