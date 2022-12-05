---
aliases: []
tags: [dates/2022/05/14, ]
---

# Contacts with Photos - Writing a Small nodeJS App That Syncs Images From Whatsapp to Your Phone Contacts
The other day I called Alon, and there is nothing wrong with Alon, in fact, I love Alon, and we had a great conversation. But the problem here is that I meant to call Alon, the other Alon. Now, there could be a few possible reasons for such a thing to happen, as well as multiple possible solutions, things I could do to prevent such a horrible accident from happening in the future. In my case, the reason was that I saved them both with the same name, and both didn't have any other identifiers. For solving this problem, I decided I had to sync contact photos from Whatsapp to my phone contacts.

  

## Original Plan
My plan was to find out how whatsapp gets it's images and do the same through python, then connect to google's api and upload each photo to it's corospouing contact.

---
[[Secret/Tal Rosansky]]told me about a tool named fiddler that I can use to listen in on all of their requests, then I could mimic them on my own. Sounded simple enough, the problem was that they were using Websockets, which meant it would be much harder to listen in, a tad over my skill level at least. That lead me to look further into the question if somebody did something like this before (something you should always do BEFORE beginning) and I found a 
