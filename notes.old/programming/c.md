# C

## Undefine symbolic constant

	#undef NAME

## Write to stderr

	fprintf(stderr, "err!\n");

## Compile C program

on debian:

    $ sudo apt install gcc
	$ gcc program.c -o program
	$ ./program

## Float fraction digits

	#include <stdio.h>

	int main () {
		float pi;
		pi = 3.1415;

		printf("%.2f", pi);

		return 0;
	}

output: `3.14`

## i++ and ++i

- post increment (`i++`) - returns the value, then increments it
- pre increment (`++i`) - increments the value, then returns it

## Number width in C

	#include <stdio.h>

	int main () {
		int num = 16;

		printf("%5d\n", num);

		return 0;
	}

## Run shell command

	#include <stdlib.h>

	int main()
	{
		system("ls -la");
		return 0;
	}

## Symbolic constants in C

	#define NAME value

- variable that won't change
- saves variable initialization resources
