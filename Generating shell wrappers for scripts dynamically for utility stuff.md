---
aliases: []
tags: [dates/2023/01/10, ]
---
Right now I have a collection of shell functions and aliases to do some repetitive tasks but because I've been thinking a lot lately about the idea that [[shell languages need to die]] I've been wanting to implement a system where scripts that I add write are automatically mapped to shell  wrappers, maybe with automatic documentation and parameter autocomplete. Yes, that sounds amazing.

I can invoke the script wrappers dynamically, so I can use any language I want in there, making Kotlin shell functions would be interesting (depends on cold startup times)

Update: I wrote https://github.com/Yarden-zamir/wrap for this purpose and use it every day now.