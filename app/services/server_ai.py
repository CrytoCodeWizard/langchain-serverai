import os
from langchain_openai import OpenAI, ChatOpenAI
from openai import chat

class ServerAI:
    def __init__(self, api_key=None):
        self.api_key = api_key if api_key else os.getenv('TOPDOWN_API_KEY')
        self.openai_api = OpenAI(api_key=self.api_key)
    
    def topDownServerAI(self, name, prompt, promptTemplateVariable=None):
        # Determine the GPT model version based on the name
        if name == "Standard":
            model = "gpt-3.5-turbo"
        else:
            model = "gpt-4"
            
        #If promptTemplateVariable includes a knowledge file, modify the prompt
        if promptTemplateVariable and 'knowledge_file' in promptTemplateVariable:
             # This is a simplified representation. Actual implementation might need to retrieve
             # and process the knowledge file content
             prompt += f" { promptTemplateVariable['knowledge_file'] }"
        
        # Call the OpenAI api using the selected model
        response = self.openai_api.chat(prompt, model=model)
        return response