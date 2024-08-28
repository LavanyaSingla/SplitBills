import traceback
from flask import request,jsonify
from db import execute_query

def add_expense():
    try:
        data = request.json()
        name=data['name']
        price=data['price']
        date=data['date']
        group_name=data['group_name']
        userID = data['userID']
        query=f"Insert into expenses (name,price,date,group_name,userID) values ('{name}','{price}','{date}','{group_name}','{userID}')"
        db_response = execute_query(query)
        return jsonify({'message':"Group created Successfully"}),200
    except Exception as e:
        traceback.print_exc()
        print("Error in adding expense",e)
        return jsonify({'message':"Internal Server Error"}), 500
    
