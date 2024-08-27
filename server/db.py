import mysql.connector
import traceback

db=mysql.connector.connect(
    host="",
    user="",
    password="",
    database=""
)

def connect_cursor():
    try:
        cursor = db.cursor()
        return cursor
    except Exception as e:
        traceback.print_exc()
        print("Error in db cursor",e)

def execute_query(query):
    try:
        cursor = connect_cursor()
        response = cursor.execute(query)
        db.commit()
        return response
    except Exception as e:
        traceback.print_exc()
        print("Error in executing the query",e)