import firebase_admin
from firebase_admin import credentials, db

# import credentials file
cred = credentials.Certificate('websites/serviceAccount.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://pln-ice-default-rtdb.asia-southeast1.firebasedatabase.app'
})

# get data from realtime database
def get_data_dashboard():
  ref = db.reference('/')
  return ref.get()

