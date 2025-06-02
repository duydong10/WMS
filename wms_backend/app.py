from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import requests
import string
import pandas as pd

app = Flask(__name__)
CORS(app)

df = pd.read_excel("./static/mapping.xlsx", dtype=str)

def mapping(begin, end):
    for i in range(len(df)):
        if df["PosCode"][i] == begin:
            xs = df["XT"][i]
            ys = df["YT"][i]
            mapIDs = df["MapCode"][i]
        elif df["PosCode"][i] == end:
            xe = df["XT"][i]
            ye = df["YT"][i]
            mapIDe = df["MapCode"][i]
    return {
        "begin": f"{xs}{mapIDs}{ys}",
        "end": f"{xe}{mapIDe}{ye}",
    }

@app.route('/agv/create_task', methods=['GET', 'POST', 'OPTIONS'])
def createTask():
    if request.method == 'OPTIONS':
        return '', 200
    
    req = request.get_json()
    begin = req.get("begin")
    end = req.get("end")
    posCode = mapping(begin, end)

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

@app.route('/agv/cancel_task', methods=['GET', 'POST'])
def cancelTask():
    req = request.get_json()
    url = "http://[address]:8182/rcms/services/rest/hikRpcService/cancelTask"
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