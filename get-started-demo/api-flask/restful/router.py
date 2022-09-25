import flask_restful
from src.user import Register, Login

api = flask_restful.Api(default_mediatype='application/json')

# Setup the Api resource routing
# register
api.add_resource(Register, '/api/user/register')

# login
api.add_resource(Login, '/api/user/login')
