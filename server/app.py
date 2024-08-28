from flask import Flask
from flask_cors import CORS
from routers.create_group import create_group
from routers.add_expense import add_expense

app = Flask(__name__)
CORS(app)

app.route('/createGroup', create_group())
app.route('/addExpense',add_expense())

if __name__=='main':
    app.run(debug=True)