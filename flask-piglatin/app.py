# import the Flask class from the flask module
from flask import Flask, request, json
from piglatin_final import *

# create the application object
app = Flask(__name__)

# use decorators to link the function to a url
@app.route('/')
def home():
    return "Hello, World!"  # return a string

@app.route('/piglatin', methods = ['POST'])
def api_piglatin():

    def main():
        return piggify(request.data)

    return main()

# start the server with the 'run()' method
if __name__ == '__main__':
    app.run(debug=True)
