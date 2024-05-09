from flask import Flask
from .api.routes import api_blueprint
from .extensions import init_extensions
from .config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    app.register_blueprint(api_blueprint, url_prefix='/api')
    init_extensions(app)
    return app