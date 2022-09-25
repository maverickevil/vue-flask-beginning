from flask import Blueprint

api_user = Blueprint('user', __name__)


@api_user.route('/register')
def register():
    result = {
        'code': 0,
        'msg': 'success',
        'data': {
            'username': '用户名',
            'password': '密码',
            'email': '电子邮箱',
            'code': '验证码',
        }
    }
    return result


@api_user.route('/login')
def login():
    result = {
        'code': 0,
        'msg': 'success',
        'data': {
            'username': '老王',
            'password': '*' * 8,
            'email': 'laowang@mail.com',
            'phone': 10086,
            'age': 35,
        }
    }
    return result
