# Flask

#### What is Flask?
Flask is a micro web framework written in Python.The “micro” in microframework means 
Flask aims to keep the core simple but extensible. Flask won’t make many decisions for 
you, such as what database to use. Those decisions that it does make, such as what 
templating engine to use, are easy to change.
The Flask project is honest about thread-locals, does not hide them, and calls out in the
code and documentation where they are used.

#### Creating a Hello world Program

```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
return 'Hello, World!'
```

```from flask import Flask```
Creates an instance of the Flask class imported from flask package.

```app = Flask(__name__)```
Flask uses the location of the module passed here as a starting point when it needs to associate resource. Passing ```__name__``` will almost always going to configure flask in a correct way.

```@app.route('/')```
Route are the different URL that the application implements. When a web browser is going to request the URL flask is going to invoke this function and pass the return value of it back to the browser as a response.

```python
def hello_world(): 
   return 'Hello, World!'
```
This is the function that that is going to be invoked when the browser is going to request the route URL and as the response to the URL the function is going to return the string 'Hello, World!' which can be seen on the browser as a response. 

#### Run a FLASK file

To run a Flask file
1. You need to activate the virtual enviroment first
   venv\Scripts\activate
1. set the file name
   set FLASK_APP = file_name.py
1. run the Flask file
   python -m flask run

#### Debug a Flask file

```python
set FLASK_ENV = development
flask run
```

1. It activates the debugger
1. It activates the automatic reloader
1. Enables the debug mode

#### Variable Types

Variable Type | Description
--------------|-------------
string | (default) accepts any text without slash.
int | accept any positive integer
float | accept positive floating value
path | same as string but accpets slash
uuid | accepts UUID strings
