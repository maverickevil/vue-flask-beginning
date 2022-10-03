# -*- coding: utf-8 -*-
import logging


def pagination(data: list, page=1, limit=20) -> (list, int):
    is_last_page = False

    # 判断类型
    if not isinstance(data, list):
        logging.warning("[说明] data 类型错误")
        return None
    if not isinstance(page, int):
        logging.warning("[说明] page 类型错误")
        return None
    if not isinstance(limit, int):
        logging.warning("[说明] limit 类型错误")
        return None

    # 判断limit值是否有效
    length = len(data)
    if limit < 1 or limit > length:
        logging.warning("[说明] limit 值无效")
        return None

    # 判断page值是否有效
    count = length // limit
    if page < 1 or page > count:
        if (count + 1 == page) and ((page - 1) * limit < length):
            is_last_page = True
        else:
            logging.warning("[说明] page 值无效")
            return None

    # 取值
    start = (page - 1) * limit
    if is_last_page:
        result = data[start:]
    else:
        end = page * limit
        result = data[start:end]
    return result, count


if __name__ == '__main__':
    directory = list(range(1, 51))
    res = pagination(directory, 3, 20)
    print(res)
