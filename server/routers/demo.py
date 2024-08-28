from flask import request,jsonify
import traceback
from db import execute_query

def register():
    try:
        data=request.json()
    except Exception as e:
        traceback.print_exc()
        print("",e)
        return jsonify({'message':"Internal Server Error"}), 500
