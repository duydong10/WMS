from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import requests
import pandas as pd
from function.mapping import mapping
from functools import wraps
import jwt
from datetime import datetime, timezone, timedelta

app = Flask(__name__)
CORS(app)
df = pd.read_excel("./static/mapping.xlsx", dtype=str)

SECRET_KEY = "PHAMDUYDONG.2025"

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if request.method == 'OPTIONS':
            return f(*args, **kwargs)
        token = None
        if 'Authorization' in request.headers:
            auth_header = request.headers['Authorization']
            if auth_header.startswith("Bearer "):
                token = auth_header.split(" ")[1]
        if not token:
            return jsonify({'message': 'Token is missing!'}), 401
        try:
            jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        except Exception as e:
            return jsonify({'message': 'Token is invalid!'}), 401
        return f(*args, **kwargs)
    return decorated


account = [
    {
        "account": "admin",
        "password": "admin01"
    },
    {
        "account": "admin2",
        "password": "admin02"
    }
]

@app.route('/login', methods=['POST'])
def login():
    req = request.get_json()
    for acc in account:
        if req['account'] == acc['account'] and req['password'] == acc['password']:
            token = jwt.encode(
                {
                    'account': acc['account'],
                    'exp': datetime.now(timezone.utc) + timedelta(minutes=10),
                },
                SECRET_KEY,
                algorithm="HS256"
            )
            if isinstance(token, bytes):
                token = token.decode('utf-8')
            print(f"Token generated: {token}")
            return jsonify({"msgType": "success", "message": "Login successful", "token": token}), 200
    return jsonify({"msgType": "failure", "message": "Invalid credentials"}), 401

@app.route('/change_password', methods=['POST'])
@token_required
def change_password():
    req = request.get_json()
    global account, password
    if req['account'] == account and req['oldPassword'] == password:
        password = req['newPassword']
        return jsonify({"msgType": "success", "message": "Password changed successfully"}), 200
    else:
        return jsonify({"msgType": "failure", "message": "Invalid credentials"}), 401

@app.route('/test', methods=['GET'])
@token_required
def test():
    return jsonify({"message": "Test successful"}), 200

@app.route('/agv/create_task', methods=['POST', 'OPTIONS'])
@token_required
def createTask():
    if request.method == 'OPTIONS':
        return '', 200
    
    req = request.get_json()
    for posCodePath in req["positionCodePath"]:
        posCode = posCodePath["positionCode"]
        posCodeMap = mapping(df, posCode)
        posCodePath["positionCode"] = posCodeMap

    url = "https://httpbin.org/post"
    res = requests.post(url, json=req)
    return jsonify(res.json()), 200

@app.route('/agv/cancel_task', methods=['POST', 'OPTIONS'])
@token_required
def cancelTask():
    if request.method == 'OPTIONS':
        return '', 200
    
    req = request.get_json()
    url = "https://httpbin.org/post"
    res = requests.post(url, json=req)
    return jsonify(res.json()), 200

@app.route('/agv/continue_task', methods=['POST', 'OPTIONS'])
@token_required
def continueTask():
    if request.method == 'OPTIONS':
        return '', 200
    
    req = request.get_json()
    url = "https://httpbin.org/post"
    res = requests.post(url, json=req)
    return jsonify(res.json()), 200

@app.route('/agv/agv_callback', methods=['POST', 'OPTIONS'])
@token_required
def agvCallback():
    if request.method == 'OPTIONS':
        return '', 200
    
    req = request.get_json()
    url = "https://httpbin.org/post"
    res = requests.post(url, json=req)
    return jsonify(res.json()), 200

@app.route('/agv/lock_position', methods=['POST'])
def lockPosition():
    req = request.get_json()
    url = "http://[address]:8182/rcms/services/rest/hikRpcService/lockPosition"
    res = requests.post(url, json=req)
    return jsonify(res.json()), 200

@app.route('/agv/stop_robot', methods=['POST'])
def stopRobot():
    req = request.get_json()
    url = "http://[address]:8182/rcms/services/rest/hikRpcService/stopRobot"
    res = requests.post(url, json=req)
    return jsonify(res.json()), 200

@app.route('/agv/resume_robot', methods=['POST'])
def resumeRobot():
    req = request.get_json()
    url = "http://[address]:8182/rcms/services/rest/hikRpcService/resumeRobot"
    res = requests.post(url, json=req)
    return jsonify(res.json()), 200

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=5000, debug=True)