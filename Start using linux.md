---
aliases: [Moving to linux]
tags: [dates/2022/10/19, ]
---
[[Linux]] is made for people like me, there is literally no good enough reason for me to prostpone it anymore, I can play all of my games thanks to [[Steam]]

#### Pros
- I will learn a lot
- Continuity with my [[Mac]] at [[Job/Software Engineer at Qlik|Work]]
- Customization!
- Moral superiority
- Supporting open source
- Not supporting [[Microsoft]]
- Cool points
- More customization, I fucking love customization, shit..

---

# The Move to linux
#dates/2022/12/22
It's happening, after some extensive research and some leaps of trust in future self, I decided to go with endavoros and KDE plasma. I know this is not the best choice to start with linux, usually you would want something more gradual and an almost pure Arch distro is not that, but the tinkering around and the problem solving part sounds so fun, and that's what people mostly complain about right? So I should be in safe territory, solving problems is my comfort zone.

Here goes nothing. Goodbye windows!

---
# First day of using linux
So the transition went well. The only thing that differed from expectation was how finiky, none-responsive and generally unintuitive KDE-plasma was, even for the extra customisability it's not worth it. Tried Gnome and it's generally a much better experience, (although barely any settings wtf)

Most of my zsh toolkit from mac worked as is, made some slight changes to make the scripts more universal

Funnily enough I didn't find a good terminal emulator. Linux, the land of the terminal doesn't have a feature rich terminal emulator that works. There is nothing close to Iterm2 or warp. For now i'm making do with a basic gnome one but I definitely need to figure out a solution for this

---
# My summery of the arch linux experience 
Was less unstable than expected and overall I had a good experiance but there were many small bugs and annoyances. Games needed handholding to work and updating sucked. 

---
# Next steps 
## Nixos
My new best friend is nixos. I am very much in-love with the idea of an "imutable" declarative system that can be version controled and replicated. I started using it last week and so far the experiance was much nicer than the one I had in arch. The docs suck, the comunity is small and scattered acros different forums and chats, it's new so no help from AIs like chatgpt, and a mindbending aproach to managing a system. But with all of the above, somehow in about two hours I got a working system with all my software including nvidia drivers, and games worked almost out of the box. After figuring out the drivers and doing the incredibly simple `steam.enable = true` I launched [[Baldures gate 3]] and it ran better than it ever did on arch (steam took longer to precache shades for some reason, could be just a first time thing :shrug:) now lets build my [[nixos workflow]]
