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
