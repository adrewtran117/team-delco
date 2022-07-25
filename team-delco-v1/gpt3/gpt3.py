import json
from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import openai

openai.api_key = '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'

start_sequence = "\nA:"
restart_sequence = "\n\nQ: "

app = Flask(__name__)
CORS(app)
@app.route('/')
def index():
    return jsonify({'name': 'replace'})

@app.route('/generateBox', methods=['POST'])
def generateBox():
    if (openai.api_key == ''):
        response = {'choices':[{'text':'replace with real open api key !'}]}
        return jsonify(response)
    query = request.json['query']
    response = openai.Completion.create(
    model="text-davinci-002",
    prompt=query,
    temperature=.7,
    max_tokens=100,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
    )
    return jsonify(response)





app.run()