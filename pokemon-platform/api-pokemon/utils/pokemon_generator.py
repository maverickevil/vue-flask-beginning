import radar
import random
import datetime
import requests
from fake_useragent import UserAgent


class PokemonGO(object):
    def __init__(self):
        self._result = None

    @property
    def data(self):
        """ 返回 """
        self._pokedex()
        self._collection()
        return self._result

    def _collection(self):
        """ 整理请求信息 """
        pic_base_url = "https://www.pokemon.cn/play/resources/pokedex"
        for n in range(len(self._result)):
            # 拼接baseUrl路径
            self._result[n]['file_name'] = pic_base_url + self._result[n]['file_name']
            # 添加出生日期k-v
            self._result[n]['birth_day'] = self.datum_generator()
            # 添加随机性别k-v
            self._result[n]['sex'] = self.random_sex()
            # 添加随机年龄k-v
            self._result[n]['age'] = self.random_age()

    def _pokedex(self):
        """ 请求随机数据 """
        ua = UserAgent()
        url = "https://www.pokemon.cn/play/pokedex/api/v1/random"
        headers = {
            'user-agent': ua.chrome,
        }
        response = requests.request("GET", url, headers=headers)
        if response.status_code == 200:
            self._result = response.json().get('pokemons')

    @staticmethod
    def datum_generator():
        """ 随机日期生成器 """
        # 宠物小精灵最初发行日期
        start_date = "1996-02-27"
        end_date = datetime.date.today()
        date_obj = radar.random_date(start_date, end_date)
        date_string = date_obj.strftime("%Y-%m-%d")
        return date_string

    @staticmethod
    def random_sex():
        """ 随机性别 """
        sex = ('♂', '♀')
        return random.choice(sex)

    @staticmethod
    def random_age():
        """ 随机年龄 """
        scope = (0, 50)
        return random.randint(*scope)


if __name__ == '__main__':
    play = PokemonGO()
    print(play.data)
    page = 1
    limit = 20

