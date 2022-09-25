import re
import requests

from fake_useragent import UserAgent


class GetLocalCity(object):
    def __init__(self):
        self.ipv4 = None
        ua = UserAgent()
        self.headers = {
            "user-agent": ua.firefox
        }

    def find_city(self):
        rexp = re.search(r"<li.*>City: (.*)</li>", self.get_address)
        result = rexp.group(1)
        return result

    @property
    def get_address(self):
        self.ipv4 = self.get_public_ip()
        url = f"https://www.whatismyip.com/{self.ipv4}/"
        response = requests.request("GET", url, headers=self.headers)
        if response.status_code != 200:
            return None
        return response.text

    @staticmethod
    def get_public_ip():
        """ 获取IP地址 """
        url = 'http://jsonip.com'
        resp = requests.get(url)
        info = resp.json()
        public_ip = info.get('ip')
        return public_ip


if __name__ == '__main__':
    my = GetLocalCity()
    addr = my.find_city()
    print("我的公网ip：{}，我的位置：{}。".format(my.ipv4, addr))
