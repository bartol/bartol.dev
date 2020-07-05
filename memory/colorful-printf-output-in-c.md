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
