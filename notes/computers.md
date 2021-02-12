% computers

## low level

### Memory management unit

Koristi se za prevođenje virtualnih memorijskih adresa u fizičke memorijske adrese.

Koristan jer omogučava pokretanje više programa koji koriste istu apsolutnu adresu.

Primjer:

- Program 1 - započinje na adresi `0x2020`
- Program 2 - započinje na adresi `0x2020`

Procesor pokreće Program 1 i šalje zahtjev za vrijedost početne adrese MMU-u.
MMU mu odgovara sa vrijednosti neke fizičke adrese npr. `0x1234` koja ovisi o
kontekstu (koji program je pokrenut, itd.). Program 2 koji traži istu memorijsku
adresu dobiti će vrijednost neke druge fizičke adrese npr. `0x4321`.

### libraries

- allow programers to reuse commonly accessed code
- act as a _black box_ implementing functionality for the programmer

### abstraction

...abstraction is _the_ primary concept that underpins all modern computing. No one person can
understand everything from designing a modern user interface to the internal workings of a modern
CPU, much less build it all themselves. To programmers, abstractions are the common language that
allows us to collaborate and invent.

## unix

### standard files provided by unix

descriptive name | short name | file number | description
---------------- | ---------- | ----------- | --------------------------------
standard in      | stdin      | 0           | input from the keyboard
standard out     | stdout     | 1           | output from the console
standard error   | stderr     | 2           | error console to the console

### shell redirection

name               | command               | description
------------------ | --------------------- | ----------------------------------------
redirect to a file | `> filename`          | take all output from standard out and place it into `filename`, using `>>` will append to the file, rather than overwrite it
read from a file   | `< filename`          | copy all data from the file to the standard input of the program
pipe               | `program1 | program2` | take everything from standard out of `program1` and pass it to standard input of `program2`

### pipe

The pipe is an in-memory buffer that connects two processes together. file descriptors point to the
pipe object, which buffers data sent to it (via `write`) to be _drained_ (via `read`)

### ascii char size

8 bits = 1 byte

2<sup>8</sup> = 256 unique combinations

### 32 and 64 bit computing

Modern architectures are at least 32 bit computers. This means they work with 4 bytes at a time
when processing and reading or writing to memory. We refer ti 4 bytes as a _word_; this is
analogous to language where letters (bits) make up words in a sentence, except in computing every
Modern architectures are 64 bits, which doubles the size the processor works with to 8 bytes.

## what is

what        | is
----------- | --------
API         | program to program interface
process     | running program
bus         | communication channel between components inside a computer or between computers
os          | used to abstract hardware to the programmer or user

## Calculate uncompressed JPG image size

	(width × height × 3) / 1048576

- why 3? size of RGB color (24 bits)
- why 1048576? convert bytes to megabytes (1024 × 1024)

## number conversion

### kilobits to kilobytes

divide by 8

### Hexadecimal

base 16, used to make it easier for humans to think about binary numbers

base 10 won't work because to represent 10 different elements in binary we need
4 bits, but 4 bits give us 16 possible combinations so it was just easier to
invent base 16 number system than convert between binary and base 10.

hexadecimal uses base 10 digits + `A`, `B`, `C`, `D`, `E`, `F`

traditionally prefixed with `0x`

## bit masking

![](/files/computers/bit-masking.png)

## clock speed

measured in GHz

speed that internal clock in CPU pulses

The pulses are used within the processor to keep it internally synchronised. On
each tick or pulse another operation can be started.

## memory hierarchy

Speed   | Memory | Description
------- | ------ | -------------------------------
fastest | Cache  | embedded inside the CPU, very fast, typically taking only one cycle to access, but since it is embedded directly into the CPU there is a limit to how big it can be
faster  | RAM    | All instructions and storage addresses for the processor must come from RAM. Although RAM is very fast, there is still some significant time taken for the CPU to access it
fast    | SSD    | quite fast, quite large, quite cheap, persistent
slow    | HDD    | very slow, large, cheap, persistent

## kernel

![](/files/computers/kernel.png)

## boolean operations

### NOT

input | output
----- | ------
0     | 1
1     | 0

### OR

input 1 | input 2 | output
------- | ------- | ------
0       | 0       | 0
0       | 1       | 1
1       | 0       | 1
1       | 1       | 1

### AND

input 1 | input 2 | output
------- | ------- | ------
0       | 0       | 0
0       | 1       | 0
1       | 0       | 0
1       | 1       | 1

### XOR

input 1 | input 2 | output
------- | ------- | ------
0       | 0       | 0
0       | 1       | 1
1       | 0       | 1
1       | 1       | 0

## servers

hostname         | device/provider | services
---------------- | --------------- | -------------------------------------
`srv1.bdeak.net` | aws lightsail   | <https://www.bdeak.net>, <https://git.bdeak.net>
`srv2.bdeak.net` | raspberry pi    | <https://linx.bdeak.net>
`srv3.bdeak.net` | racknerd        | <https://posthog.bdeak.net>
`srv4.bdeak.net` | aws lightsail   | <https://amadeus2.hr> (flask app), postgresql database

## Laptop boot menu keys

Manufacturer | Key
------------ | -------------
Acer         | Esc, F12, F9
Asus         | Esc, F8
Clevo        | F7
Dell         | F12
Fujitsu      | F12, Esc
HP           | F9, Esc
Lenovo       | F12, F8, F10
MSI          | F11
Samsung      | Esc, F12, F2
Sony         | F11, Esc, F10
Toshiba      | F12
others...    | F12, Esc

## ruteri

device name     | settings               | username | password
--------------- | ---------------------- | -------- | -------------------
Huawei B310     | <http://192.168.8.1>   | `admin`  | `admin`
Huawei B315s    | <http://192.168.8.1>   | `admin`  | `admin`
Huawei HG658 V2 | <http://192.168.2.1>   | `user`   | last 8 digits of S/N
Huawei HG8245Q2 | <http://192.168.100.1> | `root`   | `adminHW`

## note sources

- <https://www.bottomupcs.com/>
