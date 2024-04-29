import os
import firebase_admin
from firebase_admin import credentials, firestore

path = os.path.join(os.path.dirname(__file__), "firebase-sdk.json")
cred = credentials.Certificate(path)
firebase_admin.initialize_app(cred)
db = firestore.client()