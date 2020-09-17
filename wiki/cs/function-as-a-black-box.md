# Function as a black box

1. It performs some well-defined task, which will be useful to other parts of the program.
1. It might be useful to other programs as well; that is, we might be able to reuse it (and without having to rewrite it).
1. The rest of the program doesn't have to know the details of how the function is implemented. This can make the rest of the program easier to think about.
1. The function performs its task well. It may be written to do a little more than is required by the first program that calls it, with the anticipation that the calling program (or some other program) may later need the extra functionality or improved performance. (It's important that a finished function do its job well, otherwise there might be a reluctance to call it, and it therefore might not achieve the goal of reusability.)
1. By placing the code to perform the useful task into a function, and simply calling the function in the other parts of the program where the task must be performed, the rest of the program becomes clearer: rather than having some large, complicated, difficult-to-understand piece of code repeated wherever the task is being performed, we have a single simple function call, and the name of the function reminds us which task is being performed.
1. Since the rest of the program doesn't have to know the details of how the function is implemented, the rest of the program doesn't care if the function is reimplemented later, in some different way (as long as it continues to perform its same task, of course!). This means that one part of the program can be rewritten, to improve performance or add a new feature (or simply to fix a bug), without having to rewrite the rest of the program.

[source](https://www.eskimo.com/~scs/cclass/notes/sx5.html)
