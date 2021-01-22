# computers

## Memory management unit

Koristi se za prevođenje virtualnih memorijskih adresa u fizičke memorijske adrese.

Koristan jer omogučava pokretanje više programa koji koriste istu apsolutnu adresu.

Primjer:

- Program 1 - započinje na adresi `0x2020`
- Program 2 - započinje na adresi `0x2020`

Procesor pokreće Program 1 i šalje zahtjev za vrijedost početne adrese MMU-u.
MMU mu odgovara sa vrijednosti neke fizičke adrese npr. `0x1234` koja ovisi o
kontekstu (koji program je pokrenut, itd.). Program 2 koji traži istu memorijsku
adresu dobiti će vrijednost neke druge fizičke adrese npr. `0x4321`.

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

