import pyrebase
from pyfirmata import ArduinoMega, util
import time
from models import ignore_first_call
# time.sleep(10)

config = {
    'apiKey': "",
    'authDomain': "",
    'databaseURL': "",
    'projectId': "",
    'storageBucket': "",
    'messagingSenderId': "",
    'appId': "",
    'measurementId': ""
}
firebase = pyrebase.initialize_app(config)
db = firebase.database()

hidup = 0
mati = 1


# board = ArduinoMega('/dev/ttyUSB0')
board = ArduinoMega('COM9')

pinPompaLahan = board.get_pin('d:22:o')
pinPompaSumur = board.get_pin('d:23:o')
pinSelenoid_1 = board.get_pin('d:24:o')
pinSelenoid_2 = board.get_pin('d:25:o')
pinSelenoid_3 = board.get_pin('d:26:o')
pinSelenoid_4 = board.get_pin('d:27:o')
pinSelenoid_5 = board.get_pin('d:28:o')
pinSelenoid_6 = board.get_pin('d:29:o')
pinSelenoid_7 = board.get_pin('d:30:o')
pinSelenoid_8 = board.get_pin('d:31:o')
pinSelenoid_9 = board.get_pin('d:32:o')
pinSelenoid_10 = board.get_pin('d:33:o')
pinSelenoid_11 = board.get_pin('d:34:o')
pinSelenoid_12 = board.get_pin('d:35:o')
pinSelenoid_13 = board.get_pin('d:36:o')
pinSelenoid_14 = board.get_pin('d:37:o')
pinSelenoid_15 = board.get_pin('d:38:o')
pinSelenoid_16 = board.get_pin('d:39:o')
pinSelenoid_17 = board.get_pin('d:40:o')
pinSelenoid_18 = board.get_pin('d:41:o')
pinSelenoid_19 = board.get_pin('d:42:o')
pinSelenoid_20 = board.get_pin('d:43:o')

pinSoil_1 = board.get_pin('a:0:i')
pinSoil_2 = board.get_pin('a:1:i')
pinSoil_3 = board.get_pin('a:2:i')
pinSoil_4 = board.get_pin('a:3:i')
pinSoil_5 = board.get_pin('a:4:i')
pinSoil_6 = board.get_pin('a:5:i')
pinSoil_7 = board.get_pin('a:6:i')
pinSoil_8 = board.get_pin('a:7:i')
pinSoil_9 = board.get_pin('a:8:i')
pinSoil_10 = board.get_pin('a:9:i')

# matikan semua ketika code baru dijalankan
pinPompaLahan.write(mati)
pinPompaSumur.write(mati)
pinSelenoid_1.write(mati)
pinSelenoid_2.write(mati)
pinSelenoid_3.write(mati)
pinSelenoid_4.write(mati)
pinSelenoid_5.write(mati)
pinSelenoid_6.write(mati)
pinSelenoid_7.write(mati)
pinSelenoid_8.write(mati)
pinSelenoid_9.write(mati)
pinSelenoid_10.write(mati)
pinSelenoid_11.write(mati)
pinSelenoid_12.write(mati)
pinSelenoid_13.write(mati)
pinSelenoid_14.write(mati)
pinSelenoid_15.write(mati)
pinSelenoid_16.write(mati)
pinSelenoid_17.write(mati)
pinSelenoid_18.write(mati)
pinSelenoid_19.write(mati)
pinSelenoid_20.write(mati)


@ignore_first_call
def status_pompa(message):
  data = message["data"].items()
  print(data)

  for key, value in data:
    if key == 'pompa-lahan':
      if value:
        pinPompaLahan.write(hidup)
        print('lahan hidup')
      else:
        pinPompaLahan.write(mati)
        print('lahan mati')
    if key == 'pompa-sumur':
      if value:
        pinPompaSumur.write(hidup)
        print('sumur hidup')
      else:
        pinPompaSumur.write(mati)
        print('sumur mati')
    if key == 'selenoid-pipe-1':
      if value:
        pinSelenoid_1.write(hidup)
        print('hidup')
      else:
        pinSelenoid_1.write(mati)
        print('mati')
    if key == 'selenoid-pipe-2':
      if value:
        pinSelenoid_2.write(hidup)
        print('hidup')
      else:
        pinSelenoid_2.write(mati)
        print('mati')
    if key == 'selenoid-pipe-3':
      if value:
        pinSelenoid_3.write(hidup)
        print('hidup')
      else:
        pinSelenoid_3.write(mati)
        print('mati')
    if key == 'selenoid-pipe-4':
      if value:
        pinSelenoid_4.write(hidup)
        print('hidup')
      else:
        pinSelenoid_4.write(mati)
        print('mati')
    if key == 'selenoid-pipe-5':
      if value:
        pinSelenoid_5.write(hidup)
        print('hidup')
      else:
        pinSelenoid_5.write(mati)
        print('mati')
    if key == 'selenoid-pipe-6':
      if value:
        pinSelenoid_6.write(hidup)
        print('hidup')
      else:
        pinSelenoid_6.write(mati)
        print('mati')
    if key == 'selenoid-pipe-7':
      if value:
        pinSelenoid_7.write(hidup)
        print('hidup')
      else:
        pinSelenoid_7.write(mati)
        print('mati')
    if key == 'selenoid-pipe-8':
      if value:
        pinSelenoid_8.write(hidup)
        print('hidup')
      else:
        pinSelenoid_8.write(mati)
        print('mati')
    if key == 'selenoid-pipe-9':
      if value:
        pinSelenoid_9.write(hidup)
        print('hidup')
      else:
        pinSelenoid_9.write(mati)
        print('mati')
    if key == 'selenoid-pipe-10':
      if value:
        pinSelenoid_10.write(hidup)
        print('hidup')
      else:
        pinSelenoid_10.write(mati)
        print('mati')
    if key == 'selenoid-pipe-11':
      if value:
        pinSelenoid_11.write(hidup)
        print('hidup')
      else:
        pinSelenoid_11.write(mati)
        print('mati')
    if key == 'selenoid-pipe-12':
      if value:
        pinSelenoid_12.write(hidup)
        print('hidup')
      else:
        pinSelenoid_12.write(mati)
        print('mati')
    if key == 'selenoid-pipe-13':
      if value:
        pinSelenoid_13.write(hidup)
        print('hidup')
      else:
        pinSelenoid_13.write(mati)
        print('mati')
    if key == 'selenoid-pipe-14':
      if value:
        pinSelenoid_14.write(hidup)
        print('hidup')
      else:
        pinSelenoid_14.write(mati)
        print('mati')
    if key == 'selenoid-pipe-15':
      if value:
        pinSelenoid_15.write(hidup)
        print('hidup')
      else:
        pinSelenoid_15.write(mati)
        print('mati')
    if key == 'selenoid-pipe-16':
      if value:
        pinSelenoid_16.write(hidup)
        print('hidup')
      else:
        pinSelenoid_16.write(mati)
        print('mati')
    if key == 'selenoid-pipe-17':
      if value:
        pinSelenoid_17.write(hidup)
        print('hidup')
      else:
        pinSelenoid_17.write(mati)
        print('mati')
    if key == 'selenoid-pipe-18':
      if value:
        pinSelenoid_18.write(hidup)
        print('hidup')
      else:
        pinSelenoid_18.write(mati)
        print('mati')
    if key == 'selenoid-pipe-19':
      if value:
        pinSelenoid_19.write(hidup)
        print('hidup')
      else:
        pinSelenoid_19.write(mati)
        print('mati')
    if key == 'selenoid-pipe-20':
      if value:
        pinSelenoid_20.write(hidup)
        print('hidup')
      else:
        pinSelenoid_20.write(mati)
        print('mati')


print("realtime database listened")
db.child("status").stream(status_pompa)

it = util.Iterator(board)
it.start()

while True:
  print('loop')

  sensor_1 = pinSoil_1.read()
  sensor_2 = pinSoil_2.read()
  sensor_3 = pinSoil_3.read()
  sensor_4 = pinSoil_4.read()
  sensor_5 = pinSoil_5.read()
  sensor_6 = pinSoil_6.read()
  sensor_7 = pinSoil_7.read()
  sensor_8 = pinSoil_8.read()
  sensor_9 = pinSoil_9.read()
  sensor_10 = pinSoil_10.read()

  db.child('sensor').update({
      'soil_1': sensor_1,
      'soil_2': sensor_2,
      'soil_3': sensor_3,
      'soil_4': sensor_4,
      'soil_5': sensor_5,
      'soil_6': sensor_6,
      'soil_7': sensor_7,
      'soil_8': sensor_8,
      'soil_9': sensor_9,
      'soil_10': sensor_10
  })

  time.sleep(5)
