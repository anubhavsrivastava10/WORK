# Flask

#### What is Flsk?
Flask is a micro web framework written in Python.The “micro” in microframework means 
Flask aims to keep the core simple but extensible. Flask won’t make many decisions for 
you, such as what database to use. Those decisions that it does make, such as what 
templating engine to use, are easy to change.
The Flask project is honest about thread-locals, does not hide them, and calls out in the
code and documentation where they are used.

#### Creating a Hello world Program

from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
return 'Hello, World!'

_from flask import Flask_ 
Imported the flask Class

_app = Flask(__name__)_
Create an instance of this class.If you are using a single module use(__name__) becasue depending on if its started as an application or imported as a module with different name.(__xxxx__).This is needed so that flask knows where to look for template,static file etc.

_@app.route('/')_
It is used to give the give the URL to a particular function so that the flask knows which URL is going to trigger what function.

_def hello_world(): return 'Hello, World!'_
The function is given a name which is also used to generate URLs for that particular function, and returns the message we want to display in the user’s browser.

#### Run a FLASK file

To run a Flask file
1. You need to activate the virtual enviroment first
   venv\Scripts\activate
1. set the file name
   set FLASK_APP = file_name.py
1. run the flask file
   python -m flask run

#### Debug a flask file

set FLASK_ENV = development
flask run

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