setcpm(90)

drums1: s("<hh <hh oh> hh hh>*2, <[bd [- - bd]] [sd -] [- [bd -]] [sd [- - bd]] [bd [- - bd]] [sd - - [- bd]] [- - - -] [- - - -]>")
._pianoroll()

_$: s("<hh <hh oh> hh hh>*2, <[bd [- - bd]] [sd [- sd]] [[- - sd] [bd -]] [sd]>")
._pianoroll()

_$: note(`<[f,a] - - - [e,g] - [e,c4] [bb3,d]
          [a,c#] - [a,c#] [c#,e] [d,f] - [c,e] [f2,a2]
          [bb3,d] - - - [c,e] - - ->`).sound("piano")
._pianoroll()