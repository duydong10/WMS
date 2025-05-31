from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/get_api', methods=['GET'])
def get_api():
    url = "https://httpbin.org/get"
    res = requests.get(url)
    data = res.json()
    return jsonify(data), 200

@app.route('/post_api', methods=['GET', 'POST'])
def post_api():
    req = {
       "name": "John Doe",
       "age": 30
    }
    url = "https://httpbin.org/post"
    res = requests.post(url, json=req)
    data = res.json()
    return jsonify(data), 200

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=5000, debug=True)