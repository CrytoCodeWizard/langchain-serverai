from flask import Flask, request, jsonify
from ..services.langchain import generate_response

def configure_routes(app):
    @app.route('/prompts', methods=['GET', 'POST'])
    def manage_prompts():
        if request.method == 'POST':
            prompt = request.json.get('prompt', '')
            # add some logic to save the prompt using db module
        else:
            # get existing prompts from db module
            prompts = []
        return jsonify(success=True, prompts=prompts)