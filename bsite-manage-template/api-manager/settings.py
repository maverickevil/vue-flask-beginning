# -*- coding: utf-8 -*-

__author__ = 'mystic'

from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent

CONFIG = {
    'host': '0.0.0.0',
    'port': 5000,
    'debug': True,
    'use_reloader': True
}

VERIFY_USER = {
    'super': {
        'username': 'admin',
        'password': 'admin',
    },
    'user': {
        'username': 'ming',
        'password': '12345',
    }
}
