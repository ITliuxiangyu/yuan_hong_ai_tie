from django.shortcuts import render
from django.shortcuts import redirect

# import Utility



import re
from django.http import HttpResponse
# from qrcode.main import QRCode
# import os
# import random
# from PIL import Image
# from PIL import ImageDraw
# from PIL import ImageFilter
# from PIL import ImageFont
# import json, urllib
# from urllib.parse import urlencode



# from urllib import parse,request

# import requests

# import datetime 
# import time
# from django import forms
# from django.shortcuts import render_to_response
# from django.core.files.uploadedfile import InMemoryUploadedFile
# from shopApp.mytool import *
# from django.db import connection
# from aip import  AipSpeech
# import json
# import base64
# import subprocess

# import string

# import hashlib

# from django.views.decorators.csrf import csrf_exempt

# from django.core.cache import cache
# from xmljson import badgerfish as bf
# from xml.etree.ElementTree import fromstring


# 登录界面
def login(request):
    request.session['IS_LOGIN'] = True
    return render(request , "login.html");

def error(request):
    return HttpResponse("我是404");