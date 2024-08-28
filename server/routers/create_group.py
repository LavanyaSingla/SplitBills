import traceback
from flask import request, jsonify
from db import execute_query


def create_group():
    try:
        data = request.json()
        group_name = data['group_name']
        user_email = data['user_email']
        query = f"Select * from user_groups where group_name = '{group_name}' and users in ('{user_email}')"
        db_response = execute_query(query)
        if(len(db_response)>0):
            return jsonify({'message':"Group_name already exists"}), 400
        else:
            query = f"Insert into user_groups (group_name,owner,users) values('{group_name}','{user_email}','{user_email}')"
            db_response=execute_query(query)
            return jsonify({'message':"Group created Successfully"}),200
    except Exception as e:
        traceback.print_exc()
        print("Error in creating the group",e)
        return jsonify({'message':"Internal Server Error"}), 500