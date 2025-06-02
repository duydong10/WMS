from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import requests
import pandas as pd
from function.mapping import mapping


app = Flask(__name__)
CORS(app)
df = pd.read_excel("./static/mapping.xlsx", dtype=str)


@app.route('/agv/create_task', methods=['POST'])
def createTask():
    if request.method == 'OPTIONS':
        return '', 200
    
    req = request.get_json()
    begin = req.get("begin")
    end = req.get("end")
    posCode = mapping(df, begin, end)

    req["positionCodePath"] = [
        {
            "positionCode": posCode["begin"],
            "type": "00"
        },
        {
            "positionCode": posCode["end"],
            "type": "00"
        }
    ]
    del req["begin"]
    del req["end"]
    url = "https://httpbin.org/post"
    res = requests.post(url, json=req)
    data = res.json()
    return jsonify(data), 200

@app.route('/agv/cancel_task', methods=['POST'])
def cancelTask():
    req = request.get_json()
    url = "https://httpbin.org/post"
    res = requests.post(url, json=req)
    data = res.json()
    return jsonify(data), 200

@app.route('/agv/agv_callback', methods=['GET', 'POST'])
def agvCallback():
    req = request.get_json()
    url = "http://[address]:8182/xxx/agv/agvCallbackService/agvCallback"
    res = requests.post(url, json=req)
    data = res.json()
    return jsonify(data), 200

@app.route('/agv/lock_position', methods=['GET', 'POST'])
def lockPosition():
    req = request.get_json()
    url = "http://[address]:8182/rcms/services/rest/hikRpcService/lockPosition"
    res = requests.post(url, json=req)
    data = res.json()
    return jsonify(data), 200

@app.route('/agv/stop_robot', methods=['GET', 'POST'])
def stopRobot():
    req = request.get_json()
    url = "http://[address]:8182/rcms/services/rest/hikRpcService/stopRobot"
    res = requests.post(url, json=req)
    data = res.json()
    return jsonify(data), 200

@app.route('/agv/resume_robot', methods=['GET', 'POST'])
def resumeRobot():
    req = request.get_json()
    url = "http://[address]:8182/rcms/services/rest/hikRpcService/resumeRobot"
    res = requests.post(url, json=req)
    data = res.json()
    return jsonify(data), 200

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=5000, debug=True)