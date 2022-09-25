from flask import Flask
from .views.user import api_user


# 设置跨域规则（请求扩展方法）
def after_request(resp):
    """
    请求钩子：在所有的请求发生后执行，添加响应头
    """
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Methods'] = 'GET,POST'
    resp.headers['Access-Control-Allow-Headers'] = 'x-requested-with,content-type'
    return resp


def create_app():
    app = Flask(__name__)

    @app.route('/')
    def hello_world():
        return 'Hello Flask!'

    # 添加base url
    app.register_blueprint(api_user, url_prefix='/api/user')

    # 挂载after_request方法
    app.after_request(after_request)

    return app
