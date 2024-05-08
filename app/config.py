import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'mysecret')
    OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')
    FIREBASE_CREDENTIALS_PATH = os.environ.get('FIREBASE_CREDENTIALS_PATH')
