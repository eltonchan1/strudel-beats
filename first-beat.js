/* link to beat https://strudel.cc/#Ly8gUHJlYmFrZSBzY3JpcHQKLy8KLy8gVGhpcyBpcyBjb2RlIHRoYXQgaXMgbG9hZGVkIGJlZm9yZSB5b3VyIHBhdHRlcm4gaXMgcnVuLgovLyBZb3UgY2FuIHVzZSBpdCB0byBkZWZpbmUgY3VzdG9tIGZ1bmN0aW9ucyB0byB1c2UgaW4gYW55IHBhdHRlcm4uCi8vIAovLyBUaGlzIGlzIGFuIGluaXRpYWwgZXhhbXBsZSBzY3JpcHQuIFlvdSBjYW4gZWRpdCBpdCB0byBhZGQgCi8vIHlvdXIgb3duIGZ1bnRpb25zLgovLwovLyBUbyB1c2UgYSBzY3JpcHQgc2hhcmVkIGJ5IHNvbWUgb3RoZXIgdXNlciB5b3UgY2FuIHVzZQovLyB0aGUgaW1wb3J0LWJ1dHRvbiBvciBwYXN0ZSB0aGUgc2NyaXB0IGluIHRoaXMgZWRpdG9yLgoKY29uc3QgcmF0Y2hldCA9IHJlZ2lzdGVyKCdyYXRjaGV0JywgKHBhdCkgPT4gcGF0LnNvbWV0aW1lcyhwbHkoMikpKQoKLy9maXJzdF9iZWF0Ci8vYnkgZWxzbGllCgpzZXRjcG0oMjUpCgpkcnVtczogcygiaGgqOCwgPDxbYmQsIG9oXSBiZD4gYmQgc2QgWy0gc2RdIFstIHNkXSBiZCBzZCBbLSBzZF0%2BKjgiKQouZ2FpbiguNSkKLmxwZig0MDAwKQouX3BpYW5vcm9sbCgpCgpsZWFkOiBuKCJbLTIgMF0gWy0gMl0gWy0gNF0gPFs2LDhdIFs3LDldPiIpCi5zY2FsZSgiPEI6bWFqb3IgRyM6bWlub3IgRTptYWpvciBGIzptYWpvcj4vMiIpCi5zb3VuZCgicGlhbm8iKQouZ2FpbiguNjcpCi5fcGlhbm9yb2xsKCkKCmJhc3M6IG4oIlswIC0gLSAyXSBbLSAtIDQgLV0gWy0gMiAtIC1dIFs2IC0gNyAtXSIpCi5zY2FsZSgiPEI6bWFqb3IgRyM6bWlub3IgRTptYWpvciBGIzptYWpvcj4vMiIpCi5zb3VuZCgiZ21fYWNvdXN0aWNfYmFzcyIpCi50cmFuc3Bvc2UoLTEyKQouZ2FpbigxLjUpCi5fcGlhbm9yb2xsKCkKCnZhcmlhdGlvbjogbihgCjwKWyBbIFswIC0gLSAwXVstIDIgNCAtXVstIDcgLSA0XVstIC0gNiA3XSB8IFswIC0gMiAtXVstIDQgMCAtXVs0IC0gLSA2XVstIDYgNyAtXSBdIF0KWyBbIFswIDIgLSAtMl1bLSAwIC0gNF1bNiAtIC0gNl1bNSA2IDddIHwgWzAgMiAtIC1dWzQgLSAtIDJdWy0gLSA0IC1dWzcgNiA3XSBdIF0KWyBbIFswIC0gLSAyXVs0IC0gNiAtXVs3IC0gLSA0XVs2IDcgLSA3XSB8IFswIC0gLSAyXVstIC0gMCAtXVs0IC0gLSA2XVs3IC0gNyA0XSBdIF0KWyBbIFswIC0gLTIgMF1bLSAyIDQgLV1bNCA3IC0gNF1bNyAtIDYgN10gfCBbMCAtIC0gMl1bLSAtIDAgLV1bNCAtIC0gNl1bLSAtIDcgLV0gXSBdCj5gKQouc291bmQoInRyaWFuZ2xlIikKLnNjYWxlKCI8QjptYWpvciBHIzptaW5vciBFOm1ham9yIEYjOm1ham9yPi8yIikKLnRyYW5zcG9zZSgxMikKLmdhaW4oMS4yNSkKLl9waWFub3JvbGwoKQ%3D%3D
first_beat
by elslie
made for aria ysws
*/

//first_beat
//by elslie

setcpm(25)

drums: s("hh*8, <<[bd, oh] bd> bd sd [- sd] [- sd] bd sd [- sd]>*8")
.gain(.5)
.lpf(4000)
._pianoroll()

lead: n("[-2 0] [- 2] [- 4] <[6,8] [7,9]>")
.scale("<B:major G#:minor E:major F#:major>/2")
.sound("piano")
.gain(.67)
._pianoroll()

bass: n("[0 - - 2] [- - 4 -] [- 2 - -] [6 - 7 -]")
.scale("<B:major G#:minor E:major F#:major>/2")
.sound("gm_acoustic_bass")
.transpose(-12)
.gain(1.5)
._pianoroll()

variation: n(`
<
[ [ [0 - - 0][- 2 4 -][- 7 - 4][- - 6 7] | [0 - 2 -][- 4 0 -][4 - - 6][- 6 7 -] ] ]
[ [ [0 2 - -2][- 0 - 4][6 - - 6][5 6 7] | [0 2 - -][4 - - 2][- - 4 -][7 6 7] ] ]
[ [ [0 - - 2][4 - 6 -][7 - - 4][6 7 - 7] | [0 - - 2][- - 0 -][4 - - 6][7 - 7 4] ] ]
[ [ [0 - -2 0][- 2 4 -][4 7 - 4][7 - 6 7] | [0 - - 2][- - 0 -][4 - - 6][- - 7 -] ] ]
>`)
.sound("triangle")
.scale("<B:major G#:minor E:major F#:major>/2")
.transpose(12)
.gain(1.25)
._pianoroll()