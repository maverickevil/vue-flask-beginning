import json
import logging
import datetime

from flask import jsonify
from flask_restful import Resource, reqparse

import utils.global_var as gl
from settings import BASE_DIR, VERIFY_USER
from utils import INIT_PUB_IP, INIT_LOCATE


parser = reqparse.RequestParser()
parser.add_argument('data', required=True, help='Data cannot be blank!')


class Info(Resource):
    def __init__(self):
        self.locate = INIT_LOCATE
        self.pub_ip = INIT_PUB_IP

    def get(self):
        person = gl.get_value('LOGIN_USER')
        if person == VERIFY_USER['super']['username']:
            name = "🔑 超级管理员"
        else:
            name = "😊 普通账号"
        result = {
            "code": 0,
            "msg": "success",
            "data": {
                "name": person.title(),
                "display": name,
                "current_login_date": datetime.datetime.today(),
                "pub_ip_login_locate": f"🌐 {self.pub_ip}  |  🌍 {self.locate}",
            },
        }
        return jsonify(result)


class Order(Resource):
    def get(self):
        data = self.collect()
        result = {
            "code": 0,
            "msg": "success",
            "data": data,
        }
        return jsonify(result)

    @staticmethod
    def collect():
        data = dict()
        try:
            with open(f"{BASE_DIR}/data/count_data.json", mode='r', encoding='utf-8') as f:
                dict_count = json.load(f)
                data.update(dict_count)
            with open(f"{BASE_DIR}/data/table_data.json", mode='r', encoding='utf-8') as f:
                dict_table = json.load(f)
                data.update(dict_table)
        except Exception as e:
            logging.warning(e)
        finally:
            return data or None
