# Computer Science

# Binary to decimal number

The number 100101<sub>2</sub> is 1 x 2<sup>5</sup> + 0 x 2<sup>4</sup> + 0 x 2<sup>3</sup> + 1 x 2<sup>2</sup> + 0 x 2<sup>1</sup> + 1 x 2<sup>0</sup> or 32 + 4 + 1 or 37.

# Bitwise operations

Bitwise operations take strings of 0/1 values and apply Boolean operators to all of them in parallel. For example, the bitwise OR of 0011 and 0101 is 0111.

# Boolean algebra arithmetic operators

NOT takes one operand (that is, applies to a single value) and negates it: NOT 0 is 1, and NOT 1 is 0.

AND takes two operands, and yields a true value if both of its operands are true: 1 AND 1 is 1, but 0 AND 1 is 0, and 0 AND 0 is 0.

OR takes two operands, and yields a true value if either of its operands (or both) are true: 0 OR 0 is 0, but 0 OR 1 is 1, and 1 OR 1 is 1.

EXCLUSIVE OR, or XOR, takes two operands, and yields a true value if one of its operands, but not both, is true: 0 XOR 0 is 0, 0 XOR 1 is 1, and 1 XOR 1 is 0.

[source](https://www.eskimo.com/~scs/cclass/mathintro/sx4.html)

# Endianness

ordering of bytes within a binary representation of data

Big-endian and Little-endian

![](/files/endianpig.png)

# First class data type

First class means that type can be:

- The value of a variable
- An argument to a function
- The value returned by a function
- Anonymous

# Function as a black box

1. It performs some well-defined task, which will be useful to other parts of the program.
1. It might be useful to other programs as well; that is, we might be able to reuse it (and without having to rewrite it).
1. The rest of the program doesn't have to know the details of how the function is implemented. This can make the rest of the program easier to think about.
1. The function performs its task well. It may be written to do a little more than is required by the first program that calls it, with the anticipation that the calling program (or some other program) may later need the extra functionality or improved performance. (It's important that a finished function do its job well, otherwise there might be a reluctance to call it, and it therefore might not achieve the goal of reusability.)
1. By placing the code to perform the useful task into a function, and simply calling the function in the other parts of the program where the task must be performed, the rest of the program becomes clearer: rather than having some large, complicated, difficult-to-understand piece of code repeated wherever the task is being performed, we have a single simple function call, and the name of the function reminds us which task is being performed.
1. Since the rest of the program doesn't have to know the details of how the function is implemented, the rest of the program doesn't care if the function is reimplemented later, in some different way (as long as it continues to perform its same task, of course!). This means that one part of the program can be rewritten, to improve performance or add a new feature (or simply to fix a bug), without having to rewrite the rest of the program.

[source](https://www.eskimo.com/~scs/cclass/notes/sx5.html)

# Hexadecimal to decimal number

The number 25<sub>16</sub> is 2 x 16<sup>1</sup> + 5 x 16<sup>0</sup> or 32 + 5 or 37.

# Most important programming skill

ability to think abstractly

One of the most powerful techniques for managing the complexity of a software
system (or any complex system) is to compartmentalize it into little "black
box" processes which perform useful tasks but which hide some details so you
don't have to think about them all the time.

[source](https://www.eskimo.com/~scs/cclass/progintro/sx1.html)

# Network byte order

Big-endian

[Read more](/notes/programming/cs#endianness)

# Octal to decimal number

The number 45<sub>8</sub> is 4 x 8<sup>1</sup> + 5 x 8<sup>0</sup> or 32 + 5 or 37.

# OSI model layers

![](/files/programming/cs/osi-model-layers.jpeg)

# What is a compiler?

program that builds other programs

compiler translates program into a sequence of machine language instructions which do the same thing

# What is a linker?

program that inserts functions which you didn't write into your program

# What is a real number?

A real number is simply a number with a fractional part.

# What is a segmentation fault?

error caused by accessing memory that does not belong to you

# What is an integer?

An integer is a number without a fractional part, a number you could use to count things (although integers may also be negative).

# What is Boolean algebra?

Boolean algebra is a system of algebra (named after the mathematician who studied it, George Boole) based on only two numbers, 0 and 1, commonly thought of as "false" and "true." Binary numbers and Boolean algebra are natural to use with modern digital computers, which deal with switches and electrical currents which are either on or off. (In fact, binary numbers and Boolean algebra aren't just natural to use with modern digital computers, they are the fundamental basis of modern digital computers.)

[source](https://www.eskimo.com/~scs/cclass/mathintro/sx4.html)

# What is exponential notation?

Exponential or Scientific Notation is simply a method of writing a number as a base number times some power of ten. For example, we could write the number 2,000,000 as 2 x 10<sup>6</sup>, the number 0.00023 as 2.3 x 10<sup>-4</sup>, and the number 123.456 as 1.23456 x 10<sup>2</sup>.

[source](https://www.eskimo.com/~scs/cclass/mathintro/sx2.html)
