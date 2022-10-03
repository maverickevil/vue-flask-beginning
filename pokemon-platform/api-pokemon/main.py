import utils
import settings
from flask import Flask, jsonify, make_response

app = Flask(__name__)


@app.route(settings.URL, methods=['GET'])
def pokemon():
    # 整理输出
    resp_data = {
        'code': 0,
        'msg': 'success',
        'data': {
            'list': utils.DATA,
            'count': utils.COUNT,
        }
    }
    # 设置CORS响应头
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET'
    }
    return make_response(jsonify(resp_data), 200, headers)


if __name__ == '__main__':
    app.debug = True
    app.run(**settings.CONFIG)
