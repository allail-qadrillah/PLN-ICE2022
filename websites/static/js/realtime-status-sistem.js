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



