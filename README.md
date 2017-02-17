# hex
hex notation related tools 

The hex notation logic for representing binary values

-- logic --

In essence a hex symbol represent semi-nibble (half nibble) value so there is 4 possible values

[full][half-left][half-right][empty]

[empty]
00
[half-right]
01
[half-left]
10
[full]
11

so a full byte will be converted as follows

[half-left][full][empy][half-right]
10110001 

usage:
- var xnt = require('./xnt');
xnt.binaryToHex("11");

test 2