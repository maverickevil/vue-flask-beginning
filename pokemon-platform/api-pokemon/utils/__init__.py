# -*- coding: utf-8 -*-
from .pokemon_generator import PokemonGO
from .allocate_page_data import pagination

# 请求数据
_play = PokemonGO()
_lists = _play.data

# 分页处理
DATA, COUNT = pagination(data=_lists, page=1, limit=200)
