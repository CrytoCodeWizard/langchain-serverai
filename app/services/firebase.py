import firebase_admin
from firebase_admin import credentials, firestore
from ..config import Config

def get_firestore_client():
    if not firebase_admin._apps:
        cred = credentials.Certificate(Config.FIREBASE_CREDENTIALS_PATH)
        default_app = firebase_admin.initialize_app(cred)
    return firestore.client()
