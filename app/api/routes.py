import os
from flask import Flask, request, jsonify
from ..services.langchain import generate_response
from ..services.server_ai import ServerAI

def configure_routes(app):
    @app.route('/generate', methods=['POST'])
    def generate_response():
        content = request.json
        server_ai = ServerAI(api_key=os.getenv('OPENAI_API_KEY'))
        response = server_ai.topDownServerAI(
            content['name'],
            content['prompt'],
            content.get('promptTemplateVariable')
        )
        return jsonify(response)