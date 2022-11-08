import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAxpoO18fyRIw-5P5mFFnpdSvxMkrZLkDM",
  authDomain: "pln-ice.firebaseapp.com",
  databaseURL: "https://pln-ice-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pln-ice",
  storageBucket: "pln-ice.appspot.com",
  messagingSenderId: "274308576957",
  appId: "1:274308576957:web:d3eae2bd42dc075687e9d4",
  measurementId: "G-8ZLYWJWR36"
});

import { getDatabase, ref, onValue, update, get } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
const db = getDatabase()

function change_text_class(statusKran, textStatus, classNameStatus) {
  document.getElementById(statusKran).innerHTML = textStatus;
  document.getElementById(statusKran).className = classNameStatus;
}

function change_text_class_selenoid(statusKran, textStatus, classNameStatus, btnKran, textBtn, classNameBtn) {
  document.getElementById(statusKran).innerHTML = textStatus;
  document.getElementById(statusKran).className = classNameStatus;
  document.getElementById(btnKran).className = classNameBtn;
  document.getElementById(btnKran).innerHTML = textBtn;
}

// document.getElementById("status-btn-kran-1").innerHTML = ;
// change_text_class("status-kran-1", 'Hidup', 'badge bg-success ', 'status-btn-kran-1', 'Matikan', 'btn btn-danger')

// Realtime update Status 
onValue(ref(db, '/status/'), (snapshot) => {
  const data = snapshot.val();
  // change text
  var status_pompa_lahan = (data['pompa-lahan'] == true) ? document.getElementById('status-pompa-lahan').innerHTML = "<strong>Aktif</strong>" : document.getElementById('status-pompa-lahan').innerHTML = "<strong>Non Aktif</strong>";
  // change class css
  var status_pompa_lahan = (data['pompa-lahan'] == true) ? change_text_class("status-pompa-lahan-button", 'MATIKAN', 'btn btn-danger mt-2') : change_text_class("status-pompa-lahan-button", 'AKTIFKAN', 'btn btn-success mt-2');

  var status_selenoid_1 = (data['selenoid-pipe-1'] == true) ? change_text_class_selenoid("status-kran-1", 'Hidup', 'badge bg-success ', 'status-btn-kran-1', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-1", 'Mati', 'badge bg-danger ', 'status-btn-kran-1', 'Hidupkan', 'btn btn-success');
  var status_selenoid_1 = (data['selenoid-pipe-2'] == true) ? change_text_class_selenoid("status-kran-2", 'Hidup', 'badge bg-success ', 'status-btn-kran-2', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-2", 'Mati', 'badge bg-danger ', 'status-btn-kran-2', 'Hidupkan', 'btn btn-success');
  var status_selenoid_1 = (data['selenoid-pipe-3'] == true) ? change_text_class_selenoid("status-kran-3", 'Hidup', 'badge bg-success ', 'status-btn-kran-3', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-3", 'Mati', 'badge bg-danger ', 'status-btn-kran-3', 'Hidupkan', 'btn btn-success');
  var status_selenoid_1 = (data['selenoid-pipe-4'] == true) ? change_text_class_selenoid("status-kran-4", 'Hidup', 'badge bg-success ', 'status-btn-kran-4', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-4", 'Mati', 'badge bg-danger ', 'status-btn-kran-4', 'Hidupkan', 'btn btn-success');
  var status_selenoid_1 = (data['selenoid-pipe-5'] == true) ? change_text_class_selenoid("status-kran-5", 'Hidup', 'badge bg-success ', 'status-btn-kran-5', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-5", 'Mati', 'badge bg-danger ', 'status-btn-kran-5', 'Hidupkan', 'btn btn-success');
  var status_selenoid_1 = (data['selenoid-pipe-6'] == true) ? change_text_class_selenoid("status-kran-6", 'Hidup', 'badge bg-success ', 'status-btn-kran-6', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-6", 'Mati', 'badge bg-danger ', 'status-btn-kran-6', 'Hidupkan', 'btn btn-success');
  var status_selenoid_1 = (data['selenoid-pipe-7'] == true) ? change_text_class_selenoid("status-kran-7", 'Hidup', 'badge bg-success ', 'status-btn-kran-7', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-7", 'Mati', 'badge bg-danger ', 'status-btn-kran-7', 'Hidupkan', 'btn btn-success');
  var status_selenoid_1 = (data['selenoid-pipe-8'] == true) ? change_text_class_selenoid("status-kran-8", 'Hidup', 'badge bg-success ', 'status-btn-kran-8', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-8", 'Mati', 'badge bg-danger ', 'status-btn-kran-8', 'Hidupkan', 'btn btn-success');
  var status_selenoid_1 = (data['selenoid-pipe-9'] == true) ? change_text_class_selenoid("status-kran-9", 'Hidup', 'badge bg-success ', 'status-btn-kran-9', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-9", 'Mati', 'badge bg-danger ', 'status-btn-kran-9', 'Hidupkan', 'btn btn-success');
  var status_selenoid_1 = (data['selenoid-pipe-10'] == true) ? change_text_class_selenoid("status-kran-10", 'Hidup', 'badge bg-success ', 'status-btn-kran-10', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-10", 'Mati', 'badge bg-danger ', 'status-btn-kran-10', 'Hidupkan', 'btn btn-success');
  var status_selenoid_1 = (data['selenoid-pipe-11'] == true) ? change_text_class_selenoid("status-kran-11", 'Hidup', 'badge bg-success ', 'status-btn-kran-11', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-11", 'Mati', 'badge bg-danger ', 'status-btn-kran-11', 'Hidupkan', 'btn btn-success');
  var status_selenoid_1 = (data['selenoid-pipe-12'] == true) ? change_text_class_selenoid("status-kran-12", 'Hidup', 'badge bg-success ', 'status-btn-kran-12', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-12", 'Mati', 'badge bg-danger ', 'status-btn-kran-12', 'Hidupkan', 'btn btn-success');
  var status_selenoid_1 = (data['selenoid-pipe-13'] == true) ? change_text_class_selenoid("status-kran-13", 'Hidup', 'badge bg-success ', 'status-btn-kran-13', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-13", 'Mati', 'badge bg-danger ', 'status-btn-kran-13', 'Hidupkan', 'btn btn-success');
  var status_selenoid_1 = (data['selenoid-pipe-14'] == true) ? change_text_class_selenoid("status-kran-14", 'Hidup', 'badge bg-success ', 'status-btn-kran-14', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-14", 'Mati', 'badge bg-danger ', 'status-btn-kran-14', 'Hidupkan', 'btn btn-success');
  var status_selenoid_1 = (data['selenoid-pipe-15'] == true) ? change_text_class_selenoid("status-kran-15", 'Hidup', 'badge bg-success ', 'status-btn-kran-15', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-15", 'Mati', 'badge bg-danger ', 'status-btn-kran-15', 'Hidupkan', 'btn btn-success');
  var status_selenoid_1 = (data['selenoid-pipe-16'] == true) ? change_text_class_selenoid("status-kran-16", 'Hidup', 'badge bg-success ', 'status-btn-kran-16', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-16", 'Mati', 'badge bg-danger ', 'status-btn-kran-16', 'Hidupkan', 'btn btn-success');
  var status_selenoid_1 = (data['selenoid-pipe-17'] == true) ? change_text_class_selenoid("status-kran-17", 'Hidup', 'badge bg-success ', 'status-btn-kran-17', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-17", 'Mati', 'badge bg-danger ', 'status-btn-kran-17', 'Hidupkan', 'btn btn-success');
  var status_selenoid_1 = (data['selenoid-pipe-18'] == true) ? change_text_class_selenoid("status-kran-18", 'Hidup', 'badge bg-success ', 'status-btn-kran-18', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-18", 'Mati', 'badge bg-danger ', 'status-btn-kran-18', 'Hidupkan', 'btn btn-success');
  var status_selenoid_1 = (data['selenoid-pipe-19'] == true) ? change_text_class_selenoid("status-kran-19", 'Hidup', 'badge bg-success ', 'status-btn-kran-19', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-19", 'Mati', 'badge bg-danger ', 'status-btn-kran-19', 'Hidupkan', 'btn btn-success');
  var status_selenoid_1 = (data['selenoid-pipe-20'] == true) ? change_text_class_selenoid("status-kran-20", 'Hidup', 'badge bg-success ', 'status-btn-kran-20', 'Matikan', 'btn btn-danger') : change_text_class_selenoid("status-kran-20", 'Mati', 'badge bg-danger ', 'status-btn-kran-20', 'Hidupkan', 'btn btn-success');
  
});

function updateBtnStatus(namaKeran) {
  /*dapatkan status btn sebelumnya
    jika status btn True => Ubah jadi False
    jika status btn False => Ubah jadi True */
  get(ref(db, 'status/')).then((snapshot) => {
    const status = snapshot.val()[namaKeran]

    if (status) {
      update(ref(db, 'status/'), {
        [namaKeran]: false
      })
    } else {
      update(ref(db, 'status/'), {
        [namaKeran]: true
      })
    }

  })
}

window.updateKeran = (keran) => {
// update data keran
  if (keran == "keran-1") {
    updateBtnStatus('selenoid-pipe-1')
  } else if (keran == "keran-2") {
    updateBtnStatus('selenoid-pipe-2')
  } else if (keran == "keran-3") {
    updateBtnStatus('selenoid-pipe-3')
  } else if (keran == "keran-4") {
    updateBtnStatus('selenoid-pipe-4')
  } else if (keran == "keran-5") {
    updateBtnStatus('selenoid-pipe-5')
  } else if (keran == "keran-6") {
    updateBtnStatus('selenoid-pipe-6')
  }else if (keran == "keran-7") {
    updateBtnStatus('selenoid-pipe-7')
  } else if (keran == "keran-8") {
    updateBtnStatus('selenoid-pipe-8')
  } else if (keran == "keran-9") {
    updateBtnStatus('selenoid-pipe-9')
  } else if (keran == "keran-10") {
    updateBtnStatus('selenoid-pipe-10')
  } else if (keran == "keran-11") {
    updateBtnStatus('selenoid-pipe-11')
  } else if (keran == "keran-12") {
    updateBtnStatus('selenoid-pipe-12')
  } else if (keran == "keran-13") {
    updateBtnStatus('selenoid-pipe-13')
  } else if (keran == "keran-14") {
    updateBtnStatus('selenoid-pipe-14')
  } else if (keran == "keran-15") {
    updateBtnStatus('selenoid-pipe-15')
  } else if (keran == "keran-16") {
    updateBtnStatus('selenoid-pipe-16')
  } else if (keran == "keran-17") {
    updateBtnStatus('selenoid-pipe-17')
  } else if (keran == "keran-18") {
    updateBtnStatus('selenoid-pipe-18')
  } else if (keran == "keran-19") {
    updateBtnStatus('selenoid-pipe-19')
  } else if (keran == "keran-20") {
    updateBtnStatus('selenoid-pipe-20')
  } 
};

window.updatePompa = (pompa) => {
  if (pompa == "pompa-lahan") {
    updateBtnStatus('pompa-lahan')
  }
}


// Realtime update Sensor
// get(ref(db, '/sensor/'), (snapshot) => {
//   const data = snapshot.val();

//   var soil_1 = data['soil-1']
//   var soil_2 = data['soil-2']
//   var soil_3 = data['soil-3']
//   var soil_4 = data['soil-4']
//   var soil_5 = data['soil-5']
//   var soil_6 = data['soil-6']
//   var soil_7 = data['soil-7']

//   console.log(soil_1)

// });
var data = onValue(ref(db, '/sensor/'), (snapshot) => {
  const data = snapshot.val();

  var soil_1 = data['soil-1']
  // console.log(soil_1)
  return soil_1

});
console.log(data)


'use strict';

/* Chart.js docs: https://www.chartjs.org/ */

window.chartColors = {
  green: '#75c181',
  gray: '#a9b5c9',
  text: '#252930',
  border: '#e7e9ed'
};


// Chart.js Bar Chart Example 
var barChartConfig = {
  type: 'bar',

  data: {
    labels: ['Soil 1', 'Soil 2', 'Soil 3', 'Soil 4', 'Soil 5', 'Soil 6', 'Soil 7'],
    datasets: [{
      label: 'Tingkat Kelembaban💧',
      backgroundColor: window.chartColors.green,
      borderColor: window.chartColors.green,
      maxBarThickness: 16,

      data: [
        23,
        45,
        76,
        75,
        62,
        37,
        83
      ]
    }]
  },
  options: {
    responsive: true,
    aspectRatio: 1.5,
    legend: {
      position: 'bottom',
      align: 'end',
    },
    title: {
      display: true,
      text: 'Kelembaban Tanah🌱'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
      titleMarginBottom: 10,
      bodySpacing: 10,
      xPadding: 16,
      yPadding: 16,
      borderColor: window.chartColors.border,
      borderWidth: 1,
      backgroundColor: '#fff',
      bodyFontColor: window.chartColors.text,
      titleFontColor: window.chartColors.text,

    },
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          drawBorder: false,
          color: window.chartColors.border,
        },

      }],
      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: false,
          color: window.chartColors.borders,
        },
      }]
    }

  }
}

// Generate charts on load
window.addEventListener('load', function () {

  var barChart = document.getElementById('chart-bar').getContext('2d');
  window.myBar = new Chart(barChart, barChartConfig);


});



