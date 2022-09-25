# -*- coding: UTF-8 -*-
from utils.get_mine import GetLocalCity
import utils.global_var as gl

gl._init()
gl.set_value("LOGIN_USER", "Null")

my = GetLocalCity()

# 位置
INIT_LOCATE = my.find_city()

# 公网IP
INIT_PUB_IP = my.ipv4
