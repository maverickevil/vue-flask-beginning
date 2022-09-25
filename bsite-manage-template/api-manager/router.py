import flask_restful
from src.perm import Perm
from src.home import Info, Order


api = flask_restful.Api(default_mediatype='application/json')

# Setup the Api resource routing
# login
api.add_resource(Perm, '/api/menu')
# home
api.add_resource(Info, '/api/info')
api.add_resource(Order, '/api/order')

