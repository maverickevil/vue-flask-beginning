from flask import jsonify
from flask_restful import Resource, reqparse

parser = reqparse.RequestParser()
parser.add_argument('data', required=True, help='Data cannot be blank!')


class Register(Resource):
    """ 注册接口 """
    def get(self):
        result = {
            'code': 0,
            'msg': 'success',
            'data': {
                'username': '用户',
                'password': '口令',
                'phone': '手机',
                'uuid': '标识',
            }
        }
        return jsonify(result)


class Login(Resource):
    """ 登录接口 """
    def get(self):
        result = {
            'code': 0,
            'msg': 'success',
            'data': {
                'username': '小明',
                'password': 'super@123',
                'email': 'xiaoming@mail.com',
                'uid': '001',
            }
        }
        return jsonify(result)
