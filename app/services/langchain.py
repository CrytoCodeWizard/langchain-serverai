# import os
# from langchain_openai import OpenAI
# from ..db.firestore import db

# openai_api = OpenAI(api_key = os.getenv('OPENAI_API_KEY'))

# def generate_response(prompt_id):
#     prompt_settings = db.collection('prompts').document(prompt_id).get()
#     if prompt_settings.exists:
#         response = openai_api.chat(prompt_settings.to_dict()['prompt_text'])
#         return response
#     else:
#         return {'error': 'Prompt not found'}, 404
from langchain.chains import Chain
from ..config import Config

def process_prompt(prompt):
    chain = OpenAIChain(api_key=Config.OPENAI_API_KEY)
    result = chain.run(prompt)
    return result