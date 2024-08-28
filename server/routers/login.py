from flask import request,jsonify
import traceback
from db import execute_query

def login():
    try:
        data=request.json()
    except Exception as e:
        traceback.print_exc()
        print("Error in login API",e)
        return jsonify({'message':"Internal Server Error"}), 500

def register():
    try:
        data=request.json()
        
    except Exception as e:
        traceback.print_exc()
        print("Error in registering API",e)
        return jsonify({'message':"Internal Server Error"}), 500