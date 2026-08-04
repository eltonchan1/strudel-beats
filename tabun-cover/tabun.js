setcpm(90)

// drums

_hihats: s("<hh <hh oh> hh hh>*2")

_drums_pattern_intro: s(
  `<[bd [- - bd]] [sd -] [- [bd -]] [sd [- - bd]] 
  [bd [- - bd]] [sd - - [- bd]] [- [- sd -] bd -] ->`)

_drums_pattern1: s("<[bd -] [sd bd] [- bd] [sd -]>")

_drums_pattern2: s("<[bd [- - bd]] [sd [- - sd]] [[- - sd] [bd -]] [sd]>")

_drums_pattern3: s(
  `<[bd [- - bd]] [sd [- - sd]] [[- - sd] [bd -]] [sd - bd - - -] 
  [bd bd] [sd - - - - bd] [- - sd bd - -] [sd]>`)

_drums_pattern4: s("<bd, - [sd [- - sd]] [[- - sd] -] [sd]>")

_drums_pattern_outro: s(
  `<[bd [- - bd]] [sd -] [- [bd -]] [sd - - -] 
  [bd [- - bd]] [sd - - [- bd]] [- [- sd -] bd -] [sd - - -] 
  [bd [- - bd]] [sd -] [- [bd -]] [sd [- - bd]] 
  [bd [- - bd]] [sd - - - - bd] [bd - - sd - -] ->`)

_fill_in1: s("<[bd - - - - bd] [bd - - - - bd] [bd - - - - bd] [bd bd]>")
  
_fill_in2: s("<[bd bd] - - ->")

_fill_in3: s("<[bd] [bd - - - - sd] [bd bd] [sd]>")

_fill_in4: s("<[bd - - sd - sd] [bd - sd ht mt lt] [cr] [-]>")

_crash: s("cr")

// chords

$: note(`<[f4,a4] - - - [e4,c4] - [e4,c4] [bb3,d4]
          [a,c#4] - [a,c#4] [c#4,e4] [d4,f4] - [c4,e4] [f4,a]
          [bb,d4] - - - [c4,e4] - - -
          [f4,a4] [- [e4,c4]] [- [e4,c4]] - [a,g4] [- [d4,f4]] [- [d4,f4]] -
          [f4,a4] [- [e4,c4]] [- [e4,c4]] - [a,g4] [- [d4,f4]] [- [d4,f4]] -
          [f4,a4] [- [c#4,g4]] [- [c#4,g4]] - [d4,f4] [- [c4,d#4]] [- [d4,f4]] [- [d4,f4] - -]
          [f4,a4] [- [e4,g4]] [- [e4,g4]] - [c4,f4] [- [c4,f4]] [- [c4,f4]] -
          [f4,a4] [- [e4,g4]] [- [e4,g4]] - [c4,f4] [c4,f4] [[c4,f4] [c4,f4]] -
          [f4,a4] [f4,a4] [e4,g4] [e4,g4] [e4,g4] [e4,g4] [f4,a4] [f4,a4]
          [bb,d4] [bb,d4] [c#4,e4] [c#4,e4] [d4,f4] [d4,f4] [f4,a4] [f4,a4]
          [f4,a4] [f4,a4] [e4,g4] [e4,g4] [e4,g4] [e4,g4] [f4,a4] [f4,a4]
          [bb,d4] [bb,d4] [[e4,g4] [e4,g4]] -
          [[bb,d4] f4] [a4 [e4,g4]] - - [[a,g4] f4] [g4 [d4,f4]] - -
          [[g,bb] d4] [f4 [c#4,e4]] - - [f,a,f4] [f,a,f4] [[f,a,f4] [f,a,f4]] -
          [f4,a4] [- [e4,g4]] [- [e4,g4]] - [e4,g4] [- [f4,a4]] [- [f4,a4]] -
          [f4,a4] [- [e4,g4]] [- [e4,g4]] - [d4,f4] [- [c4,d#4]] [- [d4,f4]] [- [d4,f4] - -]
          [f4,a4] [- [e4,g4]] [- [e4,g4]] - [e4,g4] [- [f4,a4]] [- [f4,a4]] -
          [f4,a4] [- [e4,g4]] [- [e4,g4]] - [c4,f4] [c4,f4] [[c4,f4] [c4,f4]] -
          [f4,a4] [- [e4,g4]] [- [e4,g4]] - [e4,g4] [- [f4,a4]] [- [f4,a4]] -
          [f4,a4] [- [e4,g4]] [- [e4,g4]] - [d4,f4] [- [c4,d#4]] [- [d4,f4]] [- [d4,f4] - -]
          [f4,a4] [- [e4,g4]] [- [e4,g4]] [[e4,g4] [d4,f4]] [c#4,e4,g4] [- [d4,f4]] [- [d4,f4]] [[d4,f4] [d4,f4]]
          [f4,a4] [- [e4,g4]] [- [e4,g4]] [[e4,g4] [e4,g4]] [c4,f4] [c4,f4] [[c4,eb4] [c4,eb4]] [[c4,f4] [c4,f4]]
          [f4,a4] [f4,a4] [e4,g4] [e4,g4] [e4,g4] [e4,g4] [f4,a4] [f4,a4]
          [bb,d4] [bb,d4] [c#4,e4] [c#4,e4] [d4,f4] [d4,f4] [f4,a4] [f4,a4]
          [f4,a4] [f4,a4] [e4,g4] [e4,g4] [e4,g4] [e4,g4] [f4,a4] [f4,a4]
          [bb,d4] [bb,d4] [[e4,g4] [e4,g4]] -
          >`).sound("piano")
.release(0.75)
._pianoroll()

_test: note(`<[f4,a4] [- [e4,g4]] [- [e4,g4]] [[e4,g4] [e4,g4]] [c4,f4] [c4,f4] [[c4,eb4] [c4,eb4]] [[c4,f4] [c4,f4]]>`).sound("piano")
.release(0.75)
._pianoroll()