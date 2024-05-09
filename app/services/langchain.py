import os
from langchain_openai import OpenAI
from ..db.firestore import db

openai_api = OpenAI(api_key = os.getenv('OPENAI_API_KEY'))

def generate_response(prompt_id):
    prompt_settings = db.collection('prompts').document(prompt_id).get()
    if prompt_settings.exists:
        response = openai_api.chat(prompt_settings.to_dict()['prompt_text'])
        return response
    else:
        return {'error': 'Prompt not found'}, 404