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

_full_drums: s(`< - - - - - - - - - - - - - - - - 
               [bd [- - bd]] sd [- bd] [sd [- - bd]] 
               [bd [- - bd]] [sd@@ [- bd]] [- [- sd@] bd@] -
               - - - - - - - sd
               bd [sd bd] [- bd] sd
               bd [sd bd] [- bd] sd
               bd [sd bd] [- bd] sd
               bd [sd bd] [- bd] sd
               bd [sd bd] [- bd] sd
               bd [sd bd] [- bd] sd
               bd [sd bd] [- bd] sd
               [bd@@@@ bd] [bd@@@@ bd] [bd bd] sd
               [bd [- - bd]] [sd [- - sd]] [[- - sd] bd] sd
               [bd [- - bd]] [sd [- - sd]] [[- - sd] bd] sd
               [bd [- - bd]] [sd [- - sd]] [[- - sd] bd] sd
               [bd [- - bd]] [sd [- - sd]] [[- - sd] bd] sd
               [bd [- - bd]] [sd [- - sd]] [[- - sd] bd] sd
               [bd [- - bd]] [sd [- - sd]] [[- - sd] bd] sd
               [bd [- - bd]] [sd [- - sd]] [bd bd] -
               >`)
._pianoroll()

_test$: s(`<[bd@@@@ bd] [bd@@@@ bd] [bd bd] sd>`)
._pianoroll()
_test$: s(`<<hh <hh oh> hh hh>*2>`)
._pianoroll()

// chords

chords$: note(`<[f4,a4]@@@ [e4,c4]@ [e4,c4] [bb3,d4]
          [a,c#4]@ [a,c#4] [c#4,e4] [d4,f4]@ [c4,eb4] [f4,a]
          [bb,d4]@@@ [c4,e4]@@@
          [f4,a4] [- [e4,c4]] [- [e4,c4]] - [a,g4] [- [d4,f4]] [- [d4,f4]] -
          [f4,a4] [- [e4,c4]] [- [e4,c4]] - [a,g4] [- [d4,f4]] [- [d4,f4]] -
          [f4,a4] [- [c#4,g4]] [- [c#4,g4]] - [d4,f4] [- [c4,d#4]] [- [d4,f4]] [- [d4,f4]@@]
          [f4,a4] [- [e4,g4]] [- [e4,g4]] - [c4,f4] [- [c4,f4]] [- [c4,f4]] -
          [f4,a4] [- [e4,g4]] [- [e4,g4]] - [c4,f4] [c4,f4] [[c4,f4] [c4,f4]] -
          [f4,a4] [f4,a4] [e4,g4] [e4,g4] [e4,g4] [e4,g4] [f4,a4] [f4,a4]
          [bb,d4] [bb,d4] [c#4,e4] [c#4,e4] [d4,f4] [d4,f4] [f4,a4] [f4,a4]
          [f4,a4] [f4,a4] [e4,g4] [e4,g4] [e4,g4] [e4,g4] [f4,a4] [f4,a4]
          [bb,d4] [bb,d4] [[e4,g4] [e4,g4]] -
          [[bb,d4] f4] [a4 [e4,g4]] - - [[a,g4] f4] [g4 [d4,f4]] - -
          [[g,bb] d4] [f4 [c#4,e4]] - - [f,a,f4] [f,a,f4] [[f,a,f4] [f,a,f4]] -
          [f4,a4] [- [e4,g4]] [- [e4,g4]] - [e4,g4] [- [f4,a4]] [- [f4,a4]] -
          [f4,a4] [- [e4,g4]] [- [e4,g4]] - [d4,f4] [- [c4,d#4]] [- [d4,f4]] [- [d4,f4]@@]
          [f4,a4] [- [e4,g4]] [- [e4,g4]] - [e4,g4] [- [f4,a4]] [- [f4,a4]] -
          [f4,a4] [- [e4,g4]] [- [e4,g4]] - [c4,f4] [c4,f4] [[c4,f4] [c4,f4]] -
          [f4,a4] [- [e4,g4]] [- [e4,g4]] - [e4,g4] [- [f4,a4]] [- [f4,a4]] -
          [f4,a4] [- [e4,g4]] [- [e4,g4]] - [d4,f4] [- [c4,d#4]] [- [d4,f4]] [- [d4,f4]@@]
          [f4,a4] [- [e4,g4]] [- [e4,g4]] [[e4,g4] [d4,f4]] [c#4,e4,g4] [- [d4,f4]] [- [d4,f4]] [[d4,f4] [d4,f4]]
          [f4,a4] [- [e4,g4]] [- [e4,g4]] [[e4,g4] [e4,g4]] [c4,f4] [c4,f4] [[c4,eb4] [c4,eb4]] [[c4,f4] [c4,f4]]
          [f4,a4] [f4,a4] [e4,g4] [e4,g4] [e4,g4] [e4,g4] [f4,a4] [f4,a4]
          [bb,d4] [bb,d4] [c#4,e4] [c#4,e4] [d4,f4] [d4,f4] [f4,a4] [f4,a4]
          [f4,a4] [f4,a4] [e4,g4] [e4,g4] [e4,g4] [e4,g4] [f4,a4] [f4,a4]
          [bb,d4] [bb,d4] [[e4,g4] [e4,g4]] -
          [f4,a4]@ [e4,g4] [e4,g4] [e4,g4]@ [d4,f4] [d4,f4] [bb,d4]@ [c#4,e4] [c#4,e4] [d4,f4]@ [c4,eb4] [d4,f4] [bb,d4]@ [c4,e4] [c4,e4] [c4,e4]@ [d4,f4] [d4,f4] [bb,d4]@ [[c4,e4] [c4,e4]] -
          [[f4,a4] [f4,a4]] - [- - [f4,a4]@] [- [f4,a4]@@] [[e4,g4] [e4,g4]] [- - - [d4,f4]] [- - [d4,f4]@] [[bb,d4] [bb,d4]] [g,bb] [d4,f4] [c#4,e4,g4] [g4,bb4] [f4,a4] [a4,c5] [c4,eb4] [d4,f4]
          [[f4,a4] [f4,a4]] - [- - [f4,a4]@] [- [f4,a4]@@] [[e4,g4] [e4,g4]] [- - - [d4,f4]] - [d4,f4] [bb,d4] - [d4,f4] [f4,g4] [c#4,e4] - [b4,d5] [c#5,e5] - - - -
          [f4,a4] [- [e4,g4]] - -
          [f#4,a#4] - [f4,g#4] [f4,g#4] [f4,g#4] - [f#4,a#4] [f#4,a#4] [b,eb4] - [d4,f4] [g#4,b4] [gb4,bb4] - [f#4,ab4] [gb4,bb4] [gb4,bb4] - [f4,g#4] [f4,g#4] [f4,g#4] - [f#4,bb4] [f#4,bb4] [b,eb4] - [f4,ab4] [bb,eb4] [c#4,f#4] - [- [f#4,bb4]] [- [f#4,bb4]]
          [f#4,a#4] - [f4,g#4] [f4,g#4] [f4,g#4] - [f#4,a#4] [f#4,a#4] [b,eb4] - [d4,f4] [g#4,b4] [gb4,bb4] - [f#4,ab4] [gb4,bb4] [gb4,bb4] - [f4,g#4] [f4,g#4] [f4,g#4] - [f#4,bb4] [f#4,bb4] [b,eb4] - [f4,ab4] [bb,eb4] [c#4,f#4] - [c#4,f#4] [f#4,bb4] [f#4,bb4] - [[c#4,g#4,c#5] [c#4,g#4,c#5]] -
          [f#4,a#4] - [f4,g#4] [f4,g#4] [f4,g#4] - [f#4,a#4] [f#4,a#4] [b,eb4] - [d4,f4] [g#4,b4] [gb4,bb4] - [f#4,ab4] [gb4,bb4] [gb4,bb4] - [f4,g#4] [f4,g#4] [f4,g#4] - [f#4,bb4] [f#4,bb4] [b,eb4] - [[f4,ab4] [f4,ab4]] - 
          [f#4,a#4] [- [c#4,f4,ab4]] - - [bb,f4,ab4] [- [f#4,bb4]] - - [b,d#4] [- [c#4,f4,ab4]] - - [bb,c#4,f#] - - -
          >`).sound("piano")
.release(0.75)
._pianoroll()

// bass

full: note(`<bb2@@@ c@ c bb2 a2@ c# e d@ d# f2 bb1@@@ c2@@ - - - - - - - -
            [- - f c@ f2] bb1 [- c2] [- c2] - a1 [- d2] [- d2] - bb1 [- a1] [- a1] - d2 [- eb2] [- f2] - bb1 [- c2] [- c2] - f1 [- f1] [- f1] - bb1 [- c2] [- c2]
            - - - - -
            [bb1@@ bb1@ bb1] [- - bb2 bb1@ b1] [c2 c3] [bb1 bb2]
            [a1@@ a2@ a1] [- - a1 c2@ c#2] [d2 d2] a1
            [g1@@ g2@ g1] [- - g1 g2@ g#2] [a2 a1] [e2 a1]
            [d2 a2] [d3@ d2 d3@ c#3] [c3 c2] [f2 a1]
            [bb1@@ bb1@ bb1] [- - bb2 bb1@ b1] [c2 c3] [bb1 bb2]
            [a1@@ a2@ a1] [- - a1 c2@ c#2] [d2@@ d3@ c#3] [c3@ c2 f2@ a1]
            [g1@ g2 g1@@] [g1 - g2 bb1@ b1] [c2 c2]
            - - - - - - - - - - - - - - - -
            [- - f c@ f2] bb1 [- c2] [- c2] [- - c2 c3@ bb2] [a2@@@@ a1] [- - a1 d2@@] [- - - d2@@] -
            bb1 [- a1] [- a1] [- - - a2@ a1] d2 [- - - eb2@@] [- - - f2@@] [- - a1@@@]
            bb1 [- c2] [- c2] [- - - bb1@ c2] a1 [- d2] [- d2] [- a1]
            bb1 [- c2] [- c2] - f1 f1 [f2 f2] [- - f c@ f2]
            bb1 [- c2] [- c2] - a1 [- d2] [- d2] -
            bb1 [- a1] [- a1] - d2 [- - - eb2@@] [- - - f2@@] [- - a1@@@]
            bb1 [- c2] [- c2] [c3 bb1] a1 [- d2] [- d2] [d3 c2]
            bb1 [- c2] [- g2] [c3 c2] - - [eb2 f2] [c3 c2]
            [bb1@@ bb1@ bb1] [- - bb2 bb1@ b1] [c2 c3] [bb1 bb2]
            [a1@@ a2@ a1] [- - a1 c2@ c#2] [d2 d2] a1
            [g1@@ g2@ g1] [- - g1 g2@ g#2] [a2 a1] [e2 a1]
            [d2 a2] [d3@ d2 d3@ c#3] [c3 c2] [f2 a1]
            [bb1@@ bb1@ bb1] [- - bb2 bb1@ b1] [c2 c3] [bb1 bb2]
            [a1@@ a2@ a1] [- - a1 c2@ c#2] [d2@@ d3@ c#3] [c3@ c2 f2@ a1]
            [g1@ g2 g1@ g1] [- - g2 b1@@] [c2@@ c2@ d3] [c3@ a2 c2@@]
            [bb1@@@@ bb1] [- - bb2 bb1@ b1] [c2 c2] bb1 [a1@@ a2@ a1] [- - a1 c2@ c#2] [d2 d2] a1
            [g1@@@@ g2] [- - g1 g2@ g#2] [a2 a1] [e2 a1] [d2 a2] [d3@ d2 d3@ c#3] [c3 c2] [f2 a1]
            [bb1@@ bb1@ bb1] [- - bb2 bb1@ b1] [c2 c3] [bb1 bb2]
            [a1@@ a2@ a1] [- - a1 c2@ c#2] [d2@@ d3@ c#3] [c3@ c2 f2@ a1]
            [g1@ g2 g1@ g1] [- - g2 b1@@] [c2@@ c2@ d3] [c3@ a2 c2@@]
            [bb1 bb1] - [- - - bb1@@] [- - bb1@@@] [a1 a1] [- - - - - d2] [- - a1 d2@ c#2] [c2@ f2 a1@@]
            [g1@@ g1@ g1] [g2 g1] [a1 a2] [c#3 a2] [d2 [a2@ a2]] [d3 c#3] [c3 c2] [f2 a1]
            [bb1 bb1] - [- - - bb1@@] [- - bb1@@@] [a1 a1] [- - - - - d2] [- a2] [d3 a2]
            [g1@@@@ g1] - [g1 d2] [g2 bb1] [a1@@@@ a1] - [a1 a1] [a1 a1]
            - - - - - - - -
            [b1@@ b1@ b1] [- - b2 b1@ c2] [c#2 c#3] [b1 b2]
            [a#1@@ a#2@ a#1] [- - a#1 c#2@ d2] [d#2 d#2] a#1
            [g#1@@ g#2@ g#1] [- - g#1 g#2@ a2] [a#2 a#1] [f2 a#1]
            [d#2 a#2] [d#3@ d#2 d#3@ d3] [c#3 c#2] [f#2 a#1]
            [b1@@ b1@ b1] [- - b2 b1@ c2] [c#2 c#3] [b1 b2]
            [a#1@@ a#2@ a#1] [- - a#1 c#2@ d2] [d#2@@ d#3@ c##3] [c#3@ c#2 f#2@ a#1]
            [g#1@@ g#2@ g#1] [- - g#2 b1@ c2] [c#2@@ c#2@ eb3] [c#3@ bb2 f2@ c#2] [f#1 g#1] [bb1 c#2] [[f#2,f#1] g#1] [bb1 c#2]
            [b1@@ b1@ b1] [- - b2 b1@ c2] [c#2 c#3] [b1 b2]
            [a#1@@ a#2@ a#1] [- - a#1 c#2@ d2] [d#2 d#2] a#1
            [g#1@@ g#2@ g#1] [- - g#1 g#2@ a2] [a#2 a#1] [f2 a#1]
            [d#2 a#2] [d#3@ d#2 d#3@ d3] [c#3 c#2] [f#2 a#1]
            [c2@@ c3@ c2] [- - c2 c3@ c2] [b1 b2] [c#3 b2]
            [bb2@@ bb1@ bb1] [- - bb1 bb2@ bb1] [eb2 bb1] [eb2 c#2]
            [g#1@@ g#2@ g#1] [- - g#1 b1@ c2] [c#2 c#3] [c#2 g#1]
            [f#1@@ c#2@ f#2] [- - f#2 c#3@ f#2] [f#1 g#1] [bb1 c#2]
            [b1@@ b1@ b1] [- - b2 b1@ c2] [c#2@@ c#2@ eb3] [c#3@ bb2 c#2@ bb1]
            [b1@@ b1@ b1] [- - b2 b1@ c2] [c#2 c#3] [b1 b2]
            [a#1@@ a#2@ a#1] [- - a#1 c#2@ d2] d#2 bb1
            [g#1@@ g#2@ g#1] [- - g#1 g#2@ a2] [a#2 d2] [f2 a#1]
            [d#2 a#2] [d#3@ d#2 d#3@ d3] [c#3 c#2] [f#2 a#1]
            [b1@@ b1@ b1] [- - b2 b1@ c2] [c#2 c#3] [b1 b2]
            [a#1@@ a#2@ a#1] [- - a#1 c#2@ d2] [d#2@@ d#3@ c##3] [c#3@ c#2 f#2@ a#1]
            [g#1@ g#2 g#1@ g#1] [- - g#2 c2@ c2] [c#2 c#2] -
            - - - - - - - - - - - - - - - -
            >`).sound("sine")
.gain(3)
._pianoroll()



// for melody theres a pickup note at the start of the song so remember that for when working on melody