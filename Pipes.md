---
aliases: [Pipes the programming language]
tags: [dates/2022/11/22, ]
---

Random idea for programming language - pipes
# core ideas 
## pipes
the last block in a pipe is the returned value
pipes are evaluated from left to right in order
## block
blocks are dispatched in order but can evaluate in order of completion and are waited when needed

# Async  by default
Because blocks are not awaited by default, ten lines of code means ten 'pipes' that are asynchronous

# Syntax
## function definitions
input brackets for each argument names are plain text, can use spaces and symbols (except for some special ones like brackets), arguments can be anywhere in the function's signature
### examples
```pipes
make stuff happen{
	do stuff
}
```
```pipes
add (Number) to (Number){
	return (args[0]) + (args[1])
}
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
# This is a comment

# block - a block executes all the lines in 

examples -

x = 1
y = 2
z = x + y
something = sleep 5 | z + 1
something | print it
print 1
print 2
print 3
 # output 2 1 3 (scrambled) (after 5 seconds) 4
 # if I want the output to be in order we need to pipe eg:
x = 1
y = 2
z = x + y
something = sleep 5 | z + 1
something |
print it |
print 1 |
print 2 |
print 3
 # output 4 1 2 3 (after 5 seconds)

5 | print it # as it is implied. the output if the begining of the pipe (5) is passed to the next pipe segment as it.


sleep (seconds : Number) = thread::sleep(seconds * 1000)

after (seconds : Number) do (something : Block) = sleep seconds | something
generate number after (seconds : Number) = {
    after 
}
---
|       is the pipe operator, will preform the left side and pass enviorment to the right side
-|      is a pipe split operator, applicable when 'it' is iterable, will create a pipe for each item in 'it'. Additonally to it, it will pass 'previous' and 'next' variables that will await if used
?|      is a pipe filter operator, pops the current value of the pipe, if it is true, it will continue to the next pipe
-/      is ordered pipe split operator, will create a pipe for each item in 'it' but will wait for the previous pipe to finish before starting the next one

|-      is a pipe join operator, will join all pipes on the left side into one pipe
;       is a pipe seal # maybe not needed
---
pipe[0] is the current value of the pipe
it      is a pointer for pipe[0]
pipe    is the current pipe stack
---
list = [1, 2, 3, 4, 5]

# add all items in list sequential piping
sum = 0
list -/ sum += it

# add all items in list smart piping
sum = list -| it + previous ?: 0 |- it.last 

# print all items in a list smart piping
list -| print it

# print all items in a list sequential piping
list -/ print it

# print all item that are even in a list smart piping
list = [1, 2, 3, 4, 5]
list -| it % 2 == 0 ?|- print it# output [2, 4]     #prints a list of all even numbers
list -| it % 2 == 0 ?| print it # output 2 4        #prints each even number
list -| it % 2 != 0 ?|  # if it is not even, pipe seal to stop flow
it
|- print it
---
# lets assume list is a bunch of elements with their own index (element : Any, index : Int)  tuples
list = [1, 2, 3, 4, 5]
first item = list[0]

# reverse list
reversed list = []
list -/ reversed list[size of (list) - index]= it
enumerate list -| (index = size list - it.index, value = it.value) /- print 
index of (item : Tuple
list | print it     # prints [1 2 3 4 5]
list -| print it    # prints 1 2 3 4 5 (with new lines)
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
    
