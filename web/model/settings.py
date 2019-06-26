import os
from django.core.urlresolvers import reverse_lazy
BASER_DIR = os.path.dirname((os.path.dirname(os.path.abspath(__file__))))

SECRET_KEY= ')5#3$9q!z-ea(yehx@p3^478vsv=e(k-*$byt8v5+#u5@rh&f'
DEBUG = True
ALLOWED_HOSTS = []

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
MIDDLEWARE_CLASSES=[
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.middleware.security.SecurityMiddleware',
]
