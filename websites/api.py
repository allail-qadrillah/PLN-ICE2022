import requests
import json

# url = f"https://api.agromonitoring.com/agro/1.0/weather?lat=5.5577&lon=95.3222&appid=9845dfd4345638d825462fc04aa64996"
url = "http://api.agromonitoring.com/agro/1.0/image/search?start=1500336000&end=1508976000&polyid=5aaa8052cbbbb5000b73ff66&appid=9845dfd4345638d825462fc04aa64996                                       "
response = requests.get(url)

data = response.json()

print(data)