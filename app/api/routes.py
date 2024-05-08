from flask import Blueprint, request, jsonify
from ..services.langchain import process_prompt
from ..models.prompt import PromptModel

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/prompts', methods=['POST'])
def create_prompt():
    data = request.json
    prompt_id = PromptModel.create(data)
    return jsonify({"message": "Prompt created", "id": prompt_id}), 201

@api_blueprint.route("/prompts/<prompt_id>", methods=["GET"])
def get_prompt(prompt_id):
    prompt_data = PromptModel.get(prompt_id)
    return jsonify(prompt_data)

@api_blueprint.route('/process_prompt', methods=['POST'])
def process_ai_prompt():
    data = request.json
    response = process_prompt(data['prompt'])
    return jsonify(response)