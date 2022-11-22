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
Because blocks are not awaited by default, ten lines of code means ten 'pipes' that are asynchronous

# Syntax

## Function Definitions
* functions are just lazy variables that evaluate when called.
* Any variable that has brackets in it's definition is treated as a lazy variable / function.
* input brackets for each argument names are plain text, can use spaces and symbols (except for some special ones like brackets), arguments can be anywhere in the function's signature

if there are missing arguments, attempt to use the last pipe value (`it`) by de-structuring it and mapping to the arguments in order. Meaning that `1 | increment | print` will print `2` and `[1,69] | increment | print` will print 2 as well because `69` (the second argument) is not mapped anywhere as there is only one argument. This should be a warning / error if known. 
`[1,2] | add () to`
`[1,2] | add it.first to it.second`
`[1,2] | add it[0] to it[1]`
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
add (5) to (64)
```

		or
            add (first : Number) to (second : Number){
                return first number + second number
            }
            to call
            add 5 to 6
    function calls
        function calls are made by putting the name of the function and the arguments in brackets
        example -
            add 5 to 6
            or
            add (5) to (6)
        if there is one missing argument, attempt to use the last pipe value (it)

# This is a Comment

# Block - a Block Executes All the Lines in
examples -

x = 1
y = 2
z = x + y
something = sleep 5 | z + 1
something | print it
print 1
print 2
print 3

# Output 2 1 3 (scrambled) (after 5 seconds) 4

# If I Want the Output to Be in Order We Need to Pipe Eg:
x = 1
y = 2
z = x + y
something = sleep 5 | z + 1
something |
print it |
print 1 |
print 2 |
print 3

# Output 4 1 2 3 (after 5 seconds)
5 | print it # as it is implied. the output if the begining of the pipe (5) is passed to the next pipe segment as it.

sleep (seconds : Number) = thread::sleep(seconds * 1000)

after (seconds : Number) do (something : Block) = sleep seconds | something
generate number after (seconds : Number) = {
    after
}
---
| is the pipe operator, will preform the left side and pass enviorment to the right side
-| is a pipe split operator, applicable when 'it' is iterable, will create a pipe for each item in 'it'. Additonally to it, it will pass 'previous' and 'next' variables that will await if used
?| is a pipe filter operator, pops the current value of the pipe, if it is true, it will continue to the next pipe
-/ is ordered pipe split operator, will create a pipe for each item in 'it' but will wait for the previous pipe to finish before starting the next one

|- is a pipe join operator, will join all pipes on the left side into one pipe
; is a pipe seal # maybe not needed
---
pipe[0] is the current value of the pipe
it is a pointer for pipe[0]
pipe is the current pipe stack
---
list = [1, 2, 3, 4, 5]

# Add All Items in List Sequential Piping
sum = 0
list -/ sum += it

# Add All Items in List Smart Piping
sum = list -| it + previous ?: 0 |- it.last

# Print All Items in a List Smart Piping
list -| print it

# Print All Items in a List Sequential Piping
list -/ print it

# Print All Item That Are Even in a List Smart Piping
list = [1, 2, 3, 4, 5]
list -| it % 2 == 0 ?|- print it# output [2, 4]     #prints a list of all even numbers
list -| it % 2 == 0 ?| print it # output 2 4        #prints each even number
list -| it % 2 != 0 ?|  # if it is not even, pipe seal to stop flow
it
|- print it
---

# Lets Assume List is a Bunch of Elements with Their Own Index (element : Any, Index : Int) Tuples
list = [1, 2, 3, 4, 5]
first item = list[0]

# Reverse List
reversed list = []
list -/ reversed list[size of (list) - index]= it
enumerate list -| (index = size list - it.index, value = it.value) /- print
index of (item : Tuple
list | print it # prints [1 2 3 4 5]
list -| print it # prints 1 2 3 4 5 (with new lines)
reverse (list : List) = {
    reversed = []
    for (item : list) {
        reversed = item | reversed
    }
    return reversed
}
---
core language ideas:
    parrallism
        * all computations are dispatched immidiatly.
        * when using a variable, it's value is awaited
    variables and functions
        * instead of functions, a variable can have inputs, a variable with inputs will only compute when called
        * spaces are allowed in names
    