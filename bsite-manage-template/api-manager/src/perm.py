import uuid
import json

from flask import jsonify, request
from flask_restful import Resource

import utils.global_var as gl
from settings import BASE_DIR, VERIFY_USER


class Perm(Resource):
    def __init__(self):
        self.result = {
            'code': 0,
            'msg': 'success',
            'data': {
                'token': uuid.uuid4(),
                'detail': "获取成功",
            }
        }
        with open(f"{BASE_DIR}/data/perm_menu.json", mode='r', encoding='utf-8') as f:
            self.dict_data = json.load(f)

    def post(self):
        _body = request.data.decode("utf-8")
        body = json.loads(_body)
        if body == VERIFY_USER['super']:
            gl.set_value('LOGIN_USER', 'admin')
            self.result['data'].update(self.dict_data.get('super'))
        elif body == VERIFY_USER['user']:
            gl.set_value('LOGIN_USER', 'ming')
            self.result['data'].update(self.dict_data.get('user'))
        else:
            self.result = {
                'code': -999,
                'msg': 'failed',
                'data': {
                    'detail': '用户名或密码错误'
                }
            }
        return jsonify(self.result)
