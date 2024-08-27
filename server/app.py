from flask import Flask
from flask_cors import CORS
from routers.create_group import create_group

app = Flask(__name__)
CORS(app)

app.route('/groups', create_group())


if __name__=='main':
    app.run(debug=True)