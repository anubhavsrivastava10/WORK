'Decorators'

'First-Class Function'
'''
A Programming Language is said to have first class function if it 
treast function as first-class citizen.

A first-class Citizen is an entity which supports all the operators
generally available to other entities. These operations typically
include being passed as an argument, returned from a function, and
assigned to a variable.
'''
def square(x):
    return x*x

result = square(5)

# Prints out the address where square function resides
print(square)
# Prints out the actual value of the function return
print(result)

# If you do take out the pranthesis and the argument, if you don't take
# out the paranthesis that means you are still accessing your function

fun_ = square
# this means fun_ is equal to the square function i.e you can use fun_ as 
# a square function

# they both will result in the address of the function
print(square)
print(fun_)

# this will result the actual value i.e fun_ is also a function
print(fun_(5))

# Passing a function as an argument in another function

def my_map(func, arg_list):
    final = []
    for i in arg_list:
        final.append(func(i))  # executing the function here
    return final

# adding the paranthesis will be considered as executing a function
sq_list = my_map(square,[1,2,3,4,5,6])

print(square)

# what happend in the above code is pass around a function like that

# returning a function

def log(msg):
    def log_msg(cap):
        print('Log:', msg, cap)
        
    return log_msg

log_hi = log('Hello !')
print(log_hi.__name__)   # log_msg
log_hi('captain')
log_hi('Leftinant')

# What happend in the above code is that you called a function log
# that takes an argument in which there is another function and
# returns the function( function does not have a paranthesis )
# which means function did not run there so what it did is the
# loh_hi works as a log_msg function which does not take any 
# argument so when calling log_hi() actually works as log_msg().

# You can use the same function log_hi for more than once and it still 
# remembers the first function argument until updated.

# its easy to loose track of every function result as it becomes more complex.

'Closure'

'''
A closure is a record storing a function together with an enviroment.
A closure allows the function to access those captured variables through
the closure's reference to them, even when the function is envoked outside
their scope.

A closure is an inner function that enables and has access to variable in 
the local scope in which it was created even if the outer function has been executed.
'''

def outer_func():
    msg = 'hi'
    def inner_fun():
        print(msg)
    
    return inner_fun()

outer_func()

# refer above for the explanation

# look closely in this example

import logging
logging.basicConfig(filename='example.log', level=logging.INFO)


def logger(func):
    def log_func(*args):
        logging.info(
            'Running "{}" with arguments {}'.format(func.__name__, args))
        print(func(*args))
    return log_func


def add(x, y):
    return x+y


def sub(x, y):
    return x-y

# assigning outer function
add_logger = logger(add)
sub_logger = logger(sub)

# accessing the inner function
add_logger(3, 3)       # 6
add_logger(4, 5)       # 9

sub_logger(10, 5)      # 5
sub_logger(20, 10)     # 10

# The closure helped us here is running these function gives us the desired
# output it also created a log file that describes all the recquired info
# How many times the function has been called
# Which function is used as a inner function parameter
# What arguments was given to that function

# closures are when a function remembers the environment it was created it,
# specifically the variables around it

# It allows us to take advantage of First-Class function.

'Decorators'

'''
A decorator is just a function that takes another function as an argument, 
adds some kind of functionality, and then returns another function.
'''

