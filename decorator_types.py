# basic rule 
# 1. It need to take function as a Parameter
# 2. Add functionality to the function
# 3. function need to return another function

# function without parameter
def str_upper(func):
    def inner():
        str1 = func()
        return str1.upper()
    return inner

@str_upper
def print_str():
    return "Do it"
    
print(print_str())

# function with parameter
def div_decorate(func):
    def inner(a,b):
        if b==0:
            return 'NOT Possible'
        return func(a,b)
    return inner

@div_decorate
def div(a,b):
    return a/b

print(div(4,1))
print(div(4,0))

# multiple decorator in single function
def str_upper(func):
    def inner():
        str1 = func()
        return str1.upper()
    return inner

def split_d(func):
    def wrapper():
        str2 = func()
        return str2.split()
    return wrapper

@split_d
@str_upper
def ordinary():
    return 'good morning'
    
print(ordinary())

# Decorator contains parameter
def outer(expre):
    def upper_d(func):
        def inner():
            return func() + expre
        return inner
    return upper_d

@outer(input())
def ordinary():
    return 'hello '
    
print(ordinary())

# single decorator on multiple function
def div_decorate(func):
    def inner(*args):
        list1 = args[1:]
        for i in list1:
            if i==0:
                return 'NOT POSSIBLE'
        return func(*args)
    return inner

@div_decorate
def div1(a,b):
    return a/b

@div_decorate
def div2(a,b,c):
    return a/b/c

print(div1(10,5))
print(div2(1,2,3))
