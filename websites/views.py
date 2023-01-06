from flask import Blueprint, render_template, request, redirect, url_for
from .models import get_data_dashboard, update_data

views = Blueprint('views', __name__)

@views.route('/')
def dashboard():  
    return render_template('dashboard.html', data = get_data_dashboard())
  
@views.route('/api')
def api():  
    return "api"

@views.route('/sistem')
def sistem():  
    return render_template('sistem.html')

@views.route('/stok')
def stok():  
    return render_template('stok.html', data=get_data_dashboard())

@views.route('/updateCabai', methods=['POST', 'GET'])
def updateCabai():  
    if request.method == 'POST':
        cabai = request.form['cabai']
        update_data({
            'cabai' : int(cabai)
        })
        return redirect(url_for('views.stok'))

@views.route('/updatePupuk', methods=['POST', 'GET']) 
def updatePupuk():  
    if request.method == 'POST':
        pupuk = request.form['pupuk']
        update_data({
            'pupuk' : int(pupuk)
        })
        return redirect(url_for('views.stok'))
        

@views.route('/updateBibit', methods=['POST', 'GET'])
def updateBibit():  
    if request.method == 'POST':
        bibit = request.form['bibit']
        update_data({
            'bibit' : int(bibit)
        })
        return redirect(url_for('views.stok'))
        

