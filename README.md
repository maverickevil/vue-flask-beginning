# Vue / Flask - Getting Started Project

> 对象：适合初学者快速上手的练习项目 \
> 目的：通过该项目，能够快速掌握前后端之间数据交互方式。


## 项目介绍

- 关于 `vue`/`flask` 的基本使用

1. `Vue`主要介绍`vue-cli`搭建、以及`vue-router`和`axios`的用法

2. `Flask`主要介绍几种布局风格，以及通过后端处理`CORS`的思路


## 目录树
```text
.                             // 工程根路径
├── README.md
├── api-flask                 // 后端项目
│   ├── README.md
│   ├── blueprint
│   ├── common
│   └── restful
└── web-vue                   // 前端项目
    ├── README.md
    ├── babel.config.js
    ├── jsconfig.json
    ├── package-lock.json
    ├── package.json
    ├── public
    ├── src
    ├── vue.config.js
    └── yarn.lock
```

## 如何构建
```shell
# [前端]
cd web-vue/
yarn install
yarn serve:dev
# 启动 http://127.0.0.1:8000   <- 用户访问该地址


# [后端]（提供以下3种方式，任选其一）
# 1.单脚本
cd api-flask/common/
pip install flask
python main.py

# 2.蓝图
cd api-flask/blueprint/
pip install flask
python manage.py

# 3.Rest库
cd api-flask/restful/
pip install -r requirements.txt
python app.py
# 启动 http://0.0.0.0:5000
```

## WEB 截图
