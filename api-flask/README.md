# Flask 后端框架

## 目录结构
```shell
(.venv) ➜  api-flask tree
.
├── README.md
├── blueprint                         // 蓝图方式
│   ├── api
│   │   ├── __init__.py
│   │   └── views
│   │       ├── __init__.py
│   │       └── user.py
│   └── manage.py
├── common                            // 单脚本方式
│   └── main.py
└── restful                           // rest库方式
    ├── app.py
    ├── requirements.txt
    ├── router.py
    ├── settings.py
    └── src
        ├── __init__.py
        └── user.py
```

## 代码布局（Layout）
```text
1. 默认单文件：适合小项目，对于中/大型项目来说，管理起来十分不便，不推荐。
2. Blueprint：适合中型项目，当功能变复杂，需要对业务逻辑进行拆分，推荐使用蓝图系统。
3. Flask-RESTful：使用这个库，也可以优雅的规划项目布局，及API业务逻辑。
```

## CORS 跨域请求
```text
[跨域问题]
跨域是因为出于浏览器的同源策略限制。同源策略（Sameoriginpolicy）是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。可以说Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。同源策略会阻止一个域的javascript脚本和另外一个域的内容进行交互。
所谓同源（即指在同一个域）就是两个页面具有相同的协议（protocol），主机（host）和端口号（port）。
跨域问题就是当一个请求url的协议、域名、端口三者之间任意一个与当前页面url不同时出现的问题。

[问题描述]
当客户端向服务器端请求ajax服务时，如果客户端和服务器端域名不一致，就会出现跨域问题，ajax报错如下：
    No 'Access-Control-Allow-Origin' header is present on the requested

[解决办法]
1. 使用flask_cors模块，解决跨域请求
2. 使用flask内置的after_request()方法（请求扩展）
3. 使用flask内置的make_response()方法
4. 实现flask中间件，拦截response，在请求对象返回前，设置响应头
```
