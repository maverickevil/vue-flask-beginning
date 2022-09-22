from blueprint.api import create_app

app = create_app()

conf = {
    'host': '0.0.0.0',
    'port': 5000,
    'debug': True,
    'use_reloader': True
}

if __name__ == '__main__':
    app.run(**conf)
