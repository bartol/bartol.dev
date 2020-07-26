# Memory management unit

Koristi se za prevođenje virtualnih memorijskih adresa u fizičke memorijske adrese.

Koristan jer omogučava pokretanje više programa koji koriste istu apsolutnu adresu.

Primjer:

- Program 1 - započinje na adresi `0x2020`
- Program 2 - započinje na adresi `0x2020`

Procesor pokreće Program 1 i šalje zahtjev za vrijedost početne adrese MMU-u.
MMU mu odgovara sa vrijednosti neke fizičke adrese npr. `0x1234` koja ovisi o
kontekstu (koji program je pokrenut, itd.). Program 2 koji traži istu memorijsku
adresu dobiti će vrijednost neke druge fizičke adrese npr. `0x4321`.
