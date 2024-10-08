---
aliases: [Pipes the programming language]
tags: [dates/2022/11/22, ]
---

Random idea for programming language - pipes

# Core Ideas

## Pipes
the last block in a pipe is the returned value  
pipes are evaluated from left to right in order

## Block
blocks are dispatched in order but can evaluate in order of completion and are waited when needed

# Async by Default
Because blocks are not awaited by default, ten lines of code means ten 'pipes' that are asynchronous and run at the same time when called

# Syntax

## Function Definitions
* there are no functions, functions are just lazy variables that evaluate when called.
* Any variable that has brackets in it's definition is treated as a lazy variable / function.
* input brackets for each argument names are plain text, can use spaces and symbols (except for some special ones like brackets), arguments can be anywhere in the function's signature

if there are missing arguments, attempt to use the last pipe value (`it`) by de-structuring it and mapping to the arguments in order. Meaning that `1 | increment | print` will print `2` and `[1,69] | add | print` will print 70  
`[1,2] | add`  
`[1,2] | add it.first it.second`  
`[1,2] | add it[0] it[1]`

### Examples
```pipes
increment (number)= number + 1
```
```pipes
make stuff happen () = {
	do stuff
}
```
```pipes
add (number :Number) to (another number :Number) = {
	number + another number
}

# usage:
add (5) (64)
[5,64] | add
```
```pipes
sleep (seconds : Number) = thread::sleep(seconds * 1000)

```

---

```pipes
x = 1
y = 2
z = x + y
something = sleep 5 | z + 1
something | print
print 1
print 2
print 3
```

 Output 2 1 3 (unordered) then after 5 seconds will print 4

If I Want the Output to Be in Order We Need to Pipe Eg:
```pipes
x = 1
y = 2
z = x + y
something = sleep 5 | z + 1
something |
print |
print 1 |
print 2 |
print 3
```

Output 4 1 2 3 (after 5 seconds)
```pipes
print (3)
4 | print (it)
5 | print
```
as it is implied. the output if the beginning of the pipe (5) is passed to the next pipe segment as `it`.

```pipes
after (seconds : Number) do (something : Block) = sleep seconds | something


generate number after (seconds : Number) = after (seconds) do {random::number}
```

---

- | is the pipe operator, will preform the left side and pass environment to the right side
- -| is a pipe split operator, applicable when 'it' is iterable, will create a pipe for each item in 'it'. Additionally to it, it will pass 'previous' and 'next' variables that will await if used
- ?| is a pipe filter operator, pops the current value of the pipe, if it is true, it will continue to the next pipe with the new (old) pipe value / it. so `['red', 'green'] -| it.length >3 ?| print` will print `green`
- -/ is ordered pipe split operator, will create a pipe for each item in 'it' but will wait for the previous pipe to finish before starting the next one
- -\\ ordered reversed split operator
- |- is a pipe join operator, will join all pipes on the left side into one pipe. Await all. Collect
- -|| is a pipe enu

---
* `pipe[0]` is the current value of the pipe
* `it` is a pointer for `pipe[0]`
- `pipe` is the current pipe stack - first in last out
---
list = [1, 2, 3, 4, 5]

# Add All Items in List Sequential Piping
sum = 0  
list -/ sum += it 

# Add All Items in List Smart Piping
```pipes

sum = bunch of numbers -| it + previous |- it.last
```

# Print All Items in a List Smart Piping
```pipes
list -| print it
```

# Print All Items in a List Sequential Piping
```pipes
list -/ print it
```


> [!question] Do I need square brackets?  
> Technically having the commas may be enough for the compiler / interpreter to figure it out

# Print All Item That Are Even in a List Smart Piping
```pipes
list = [1, 2, 3, 4, 5]  
list -| it % 2 == 0 ?|- print it
# output 
# [2, 4]


# prints each even number when it's evaluated instead of the whole list when they are all ready
list -| it % 2 == 0 ?| print it 
# output 
# 2
# 4
```


---
[idea] what if instead of assigning variables with equals, we pip into names?
---

# Lets Assume List is a Bunch of Elements with Their Own Index (element : Any, Index : Int) Tuples
list = [1, 2, 3, 4, 5]  
first item = list[0]

# Reverse List
reversed list = []  
enumerate list -/ reversed list[size of (list) - index]= it  
list -\ reversed list+=it |- print  
enumerate list -| (index = size list - it.index, value = it.value) /- print  
index of (item : Tuple  
list | print it # prints [1 2 3 4 5]  
list -/ print it # prints 1 2 3 4 5 (with new lines)  
list -| print it # prints 3 4 1 2 5 (arbitrary order as they print when ready) (with new lines)


---
core language ideas:  
    parrallism  
        * all computations are dispatched immidiatly.  
        * when using a variable, it's value is awaited  
    variables and functions  
        * instead of functions, a variable can have inputs, a variable with inputs will only compute when called  
        * spaces are allowed in names
    
---

Objects never have functions, instead, any function can be called on an object if the first param of the function is the object.  



is (string: String) palindrome = it == reverse 
is (string: String) palindrome = 
is (string: String) palindrome = 
is (string: String) palindrome = 
is (string: String) palindrome = number | string | it == it.reverse() | number
is (string: String) palindrome = number | string | it == it.reverse() | number
is (string: String) palindrome = number | string | it == {it | reverse()} | number
is (string: String) palindrome = number | string | it == {it | reverse()} | number
start server on (port: Number) = {
    http::server(port) | start(it) | route(it) |\
        'GET /' | send("hello world?") |\
        'GET /hello' | send("hello") |\
        'GET /world' | send("world") |\
        'GET /hello/world' | send("hello world")
}
