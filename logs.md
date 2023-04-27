---
aliases: []
tags: [dates/2023/04/27]
---
# what
This is a page where I dump ideas and snippets of info as fast as possible, meant to [[Action Potential model|reduce friction]] and by that increese the volume of content I jot down. A by product is reduce quality of said content.

---
# 2023
## 04
### 27
Even with current market trends I will stick to investing a steady stream into the etfs (https://www.investopedia.com/ask/answers/042415/what-average-annual-return-sp-500.asp)

Trying to use vscode instead of obsidian for a bit, I like the idea of having one workspace instead of different tools for each elment. Right now I have intelij ides for heavy work, vscode for light and generic work or github actions work and obsidian for notes and writing. For now I seem to not be able to drop intelij toolchain as they are just plain better, but I will attempt to drop obsidian and see how that goes.

I wanted to use [ijson](https://github.com/ICRAR/ijson) for my python and json interaction but it looks like they have some wierd behavior with protected keywords which I do not like. It's not a huge issue but if that sort of issue is therere I would tend to assume there are more. Examples from their readme:
```json
{
  "earth": {
    "europe": [
      {"name": "Paris", "type": "city", "info": { ... }},
      {"name": "Thames", "type": "river", "info": { ... }},
      // ...
    ],
    "america": [
      {"name": "Texas", "type": "state", "info": { ... }},
      // ...
    ]
  }
}
```
```python
import ijson

f = urlopen('http://.../')
objects = ijson.items(f, 'earth.europe.item')
cities = (o for o in objects if o['type'] == 'city')
for city in cities:
    do_something_with(city)
```
problem here is that if I were to have an item key inside the europe object (it is not nesseraly known as list at that point) then I would have an issue as the syntax I would expect would look no different. I would expect something like 
```python
theoretical_list = ijson.items(f, 'earth.europe')
```
which would fail at runtime if the europe object is not a list.

