from ..utils.firebase_service import get_firestore_client

db = get_firestore_client()

class PromptModel:
    @staticmethod
    def create(data):
        doc_ref = db.collection('prompts').add(data)
        return doc_ref.id

    @staticmethod
    def get(prompt_id):
        doc = db.collection('prompts').document(prompt_id).get()
        return doc.to_dict() if doc.exists else None
