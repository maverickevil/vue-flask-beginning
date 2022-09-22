from flask import Flask, jsonify, make_response

app = Flask(__name__)


# 使用make_response方法对响应体进行扩展
@app.route('/api/user/register')
def register():
    result = {
        'code': 0,
        'msg': 'success',
        'data': {
            'user': '谁',
            'age': '年龄',
            'hobby': '爱好',
        }
    }
    # return jsonify(result)
    response = make_response(jsonify(result))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


@app.route('/api/user/login')
def login():
    result = {
        'code': 0,
        'msg': 'success',
        'data': {
            'user': '小猫',
            'pwd': 'miao~',
            'email': 'miao@163.com',
        }
    }
    response = make_response(jsonify(result))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


@app.route('/')
def index():
    return 'it\'s ok.'


# 自定义中间件
class Middleware(object):
    def __init__(self, wsgi_app):
        self.wsgi_app = wsgi_app

    def __call__(self, environ, start_response):
        print('请求到来之前...')
        obj = self.wsgi_app(environ, start_response)
        print('请求结束之后...')
        return obj


if __name__ == '__main__':
    app.wsgi_app = Middleware(app.wsgi_app)
    app.run(host='0.0.0.0', debug=True, port=5000)
