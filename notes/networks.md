# networks

## what is

what        | is
----------- | --------
MAC address | unique identifier assigned to a network interface controller
Surface web | web visible to search crawlers (news sites, web shops, social networs, wikipedia,...)
Deep web    | web not visible to search crawlers (password protected content, page which isn't linked from anywhere,...)
Dark web    | web accessible only using special protocols/tools/configuration (tor,...)
ARP         | maps IP addresses to MAC addresses (helps resolve an address of a specific computer in the ethernet network)
DHCP        | used to dynamically assign IP addresses to devices on an network
DNS         | maps domains to IP addresses


## ARP poisoning

![](/files/networks/arp-poisoning.png)

## Network cable types

### Coaxial

![](/files/networks/cable-types/coax.jpg)

### Twisted pair

- UTP - **U**nshielded **T**wisted **P**air
- STP - **S**hielded **T**wisted **P**air

![](/files/networks/cable-types/twisted-pair.jpg)

Cat 5, Cat 5e, Cat 6,...

### Fiber optics

![](/files/networks/cable-types/fiber-optics.png)

## TCP vs UDP

![](/files/networks/tcp-udp.svg)

## Simplex vs Half-duplex vs Full-duplex

![](/files/networks/simplex-halfduplex-fullduplex.jpg)

## Hub vs Bridge vs Switch

![](/files/networks/hub-bridge-switch.jpg)

## Firewall vs Router

![](/files/networks/firewall-router.jpg)

## Directional vs omnidirectional antenna

![](/files/networks/directional-omnidirectional-antenna.png)

## Common subnets

- `/24` - `255.255.255.0`
- `/16` - `255.255.0.0`
- `/8` - `255.0.0.0`

## Common ports

<https://packetlife.net/media/library/23/common_ports.pdf>

## Find email sender IP address

1. open raw email
2. find last `Received:` header

## Port states

- Open: port accessible, application listening on it
- Closed: port accessible, no application listening on it, may mean that there is no firewall
- Filtered: blocked by firewall

![](/files/networks/syn-handshake.png)

## SYN stealth scan

connection not established, request not logged

![](/files/networks/stealth-port-scan.png)

## Heartbleed vulnerability

![](/files/networks/heartbleed.png)

## Fiber tapping

![](/files/networks/fiber-tapping.jpg)

## URL syntax

	<scheme>://<user>:<pass>@<host>:<port>/<path>?<query>#<fragment>

## web crawlers

### Allow access with robots.txt

	User-agent: *
	Disallow:

or don't create robots.txt

### Block access with robots.txt

	User-agent: *
	Disallow: /
