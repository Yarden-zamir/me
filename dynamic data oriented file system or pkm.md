---
aliases: []
tags: [dates/2022/12/01, seeds/writing ]
---
 
database
```yaml
is:
person:
call:
  alias: called
amos:
  is: person

parent:

daily logs:

sunday log:
  parent: daily logs

today i called amos:
  parent: sunday log

monday log:
  parent: daily logs

today i will do great things:
  parent: monday log
  
shoping list for today:
  parent: monday log

eggs:
  parent: shoping list for today
milk:
  parent: shoping list for today
bread:
  parent: shoping list for today
```




```yaml 
document view:
  title: $element
  navigation:
    vertical: True
  content logic: 
    content: $element<[[parrent]]-$node
    node constaints:
      width: 100
    arange:
      vertical:
        gap: 0
    inner view: document view #this means that any node that gets displayed will display this view within itself
```

![[document view 1.svg]]

```yaml
document graph view:
  title: $element
  navigation:
    vertical: True
    horizontal: True
    zoom: True
    zoom properties:
      default: 100
      max: 300
      min: 10
  content logic:
    content: $element<-[[parrent*]]-$node
    node constaints: 
      width: 10
      height: 30
    arange:
      center force: 0.5
      repel force: 0.5
      link:
        edge: [[parent]]
        force: 1.0
        distance: 10
  inner view: document view
```
<img width="461" alt="Screen Shot 2022-09-25 at 16 43 55" src="https://user-images.githubusercontent.com/8178413/192146768-64021c55-96e1-4500-b87b-2b81e246977e.png">

```yaml
node view:
  title: $element
```
<img width="245" alt="Screen Shot 2022-09-25 at 16 44 24" src="https://user-images.githubusercontent.com/8178413/192146794-f276de2c-fb32-409f-8da1-6067b65279f2.png">

```yaml
graph view:
  title: $element
  navigation:
    vertical: True
    horizontal: True
    zoom: True
    zoom properties:
      default: 100
      max: 300
      min: 10
  content logic:
    content: $element<-[[parrent*]]-$node
    node constaints:
      width: 10
      height: 30
    arange:
      center force: 0.5
      repel force: 0.5
      link:
        edge: [[parent]]
        force: 1.0
        distance: 10
  inner view: node view
```

<img width="445" alt="Screen Shot 2022-09-25 at 16 44 31" src="https://user-images.githubusercontent.com/8178413/192146796-bb40d844-1df7-4451-b19e-235c366fa12d.png">
