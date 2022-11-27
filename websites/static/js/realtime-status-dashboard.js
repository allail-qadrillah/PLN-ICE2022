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

import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
const db = getDatabase()

function change_selenoid_status(idKran, text, className){
  document.getElementById(idKran).innerHTML = text;
  document.getElementById(idKran).className = className;
}

// update data Dashboard
onValue(ref(db, '/status/'), (snapshot) => {
  const data = snapshot.val();
  var status_raspberry   = (data['raspberry-server'] == true) ? document.getElementById('status-raspberry').innerHTML = "<strong>Aktif</strong>" : document.getElementById('status-raspberry').innerHTML = "<strong>Non Aktif</strong>";
  var status_pompa_lahan = (data['pompa-lahan'] == true) ? document.getElementById('status-pompa-lahan').innerHTML = "<strong>Aktif</strong>" : document.getElementById('status-pompa-lahan').innerHTML = "<strong>Non Aktif</strong>";
  
  var status_selenoid_1  = (data['selenoid-pipe-1'] == true) ? change_selenoid_status("status-kran-1", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-1", 'Mati', 'badge bg-danger ');
  var status_selenoid_2  = (data['selenoid-pipe-2'] == true) ? change_selenoid_status("status-kran-2", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-2", 'Mati', 'badge bg-danger ');
  var status_selenoid_3  = (data['selenoid-pipe-3'] == true) ? change_selenoid_status("status-kran-3", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-3", 'Mati', 'badge bg-danger ');
  var status_selenoid_4  = (data['selenoid-pipe-4'] == true) ? change_selenoid_status("status-kran-4", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-4", 'Mati', 'badge bg-danger ');
  var status_selenoid_5  = (data['selenoid-pipe-5'] == true) ? change_selenoid_status("status-kran-5", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-5", 'Mati', 'badge bg-danger ');
  var status_selenoid_6  = (data['selenoid-pipe-6'] == true) ? change_selenoid_status("status-kran-6", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-6", 'Mati', 'badge bg-danger ');
  var status_selenoid_7  = (data['selenoid-pipe-7'] == true) ? change_selenoid_status("status-kran-7", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-7", 'Mati', 'badge bg-danger ');
  var status_selenoid_8  = (data['selenoid-pipe-8'] == true) ? change_selenoid_status("status-kran-8", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-8", 'Mati', 'badge bg-danger ');
  var status_selenoid_9  = (data['selenoid-pipe-9'] == true) ? change_selenoid_status("status-kran-9", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-9", 'Mati', 'badge bg-danger ');
  var status_selenoid_10  = (data['selenoid-pipe-10'] == true) ? change_selenoid_status("status-kran-10", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-10", 'Mati', 'badge bg-danger ');
  var status_selenoid_11  = (data['selenoid-pipe-11'] == true) ? change_selenoid_status("status-kran-11", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-11", 'Mati', 'badge bg-danger ');
  var status_selenoid_12  = (data['selenoid-pipe-12'] == true) ? change_selenoid_status("status-kran-12", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-12", 'Mati', 'badge bg-danger ');
  var status_selenoid_13  = (data['selenoid-pipe-13'] == true) ? change_selenoid_status("status-kran-13", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-13", 'Mati', 'badge bg-danger ');
  var status_selenoid_14  = (data['selenoid-pipe-14'] == true) ? change_selenoid_status("status-kran-14", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-14", 'Mati', 'badge bg-danger ');
  var status_selenoid_15  = (data['selenoid-pipe-15'] == true) ? change_selenoid_status("status-kran-15", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-15", 'Mati', 'badge bg-danger ');
  var status_selenoid_16  = (data['selenoid-pipe-16'] == true) ? change_selenoid_status("status-kran-16", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-16", 'Mati', 'badge bg-danger ');
  var status_selenoid_17  = (data['selenoid-pipe-17'] == true) ? change_selenoid_status("status-kran-17", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-17", 'Mati', 'badge bg-danger ');
  var status_selenoid_18  = (data['selenoid-pipe-18'] == true) ? change_selenoid_status("status-kran-18", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-18", 'Mati', 'badge bg-danger ');
  var status_selenoid_19  = (data['selenoid-pipe-19'] == true) ? change_selenoid_status("status-kran-19", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-19", 'Mati', 'badge bg-danger ');
  var status_selenoid_20  = (data['selenoid-pipe-20'] == true) ? change_selenoid_status("status-kran-20", 'Hidup', 'badge bg-success ') : change_selenoid_status("status-kran-20", 'Mati', 'badge bg-danger ');
  
});

onValue(ref(db, '/sensor/'), (snapshot) => {
  const data = snapshot.val();
  const tandon_air = data['ultrasonic']

  document.getElementById('tandon-air').innerHTML = `<strong>${tandon_air}</strong>`;
});


