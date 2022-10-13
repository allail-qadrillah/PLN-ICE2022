from flask import Blueprint, render_template
from .models import get_data_dashboard

views = Blueprint('views', __name__)

@views.route('/dashboard')
def dashboard():  
    return render_template('dashboard.html', data = get_data_dashboard())

@views.route('/sistem')
def sistem():  
    return render_template('sistem.html')