
//broker
var btnConnect = document.getElementById('connect');
var btnDisConnect = document.getElementById('disconnect');
var broker = document.getElementById('broker');
var btnStatus = document.getElementById('status');

//publisher
var btnPublish = document.getElementById('publish');
var pubTopic = document.getElementById('pub-topic');
var pubPayload = document.getElementById('pub-payload');

//subscriber
var subTopic = document.getElementById('sub-topic');
var btnSubscribe = document.getElementById('subscribe');
var btnUnsubscribe = document.getElementById('btnUnsubscribe');


// basic functionalities
function connectFunc() {
  console.log("Connecting..");
  // client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
  client = mqtt.connect(document.getElementById('broker').value)
  console.log(document.getElementById('broker').value);

  client.on("connect", function () {
    console.log("Successfully connected");
    btnStatus.disabled = false;
    btnDisConnect.disabled = false;
    btnConnect.disabled = true;
    btnStatus.setAttribute('value', 'Connected successfully!')
    btnStatus.setAttribute('class', 'btn btn-success')
  })
  client.subscribe({ 'junrey/temperature': { qos: 0 }, 'tina/joey': { qos: 0 }, 'ajocTemp': { qos: 0 }, 'rangiegwapo/temp': { qos: 0 }, 'ricameo/temp': { qos: 0 }, 'yuJudy/temp': { qos: 0 }, 'patfaye/temp': { qos: 0 }, 'leajay/temp': { qos: 0 }, 'Madam/temp': { qos: 0 }, 'dugta/temp': { qos: 0 }, 'janeGrace/temp': { qos: 0 }, 'iran/toring': { qos: 0 }, 'Mars/Ners': { qos: 0 } });

  client.on("message", function (topic, payload) {
    // console.log([topic, payload].join(": "));
    console.log("Received { topic: " + topic + "; payload: " + payload + " }");
    
    if (topic == 'tina/joey') {
      document.getElementById('g1').style.background = "#ccffff";
      document.getElementById('g1').value = payload;
    }
    
    if (topic == 'ajocTemp') { 
      document.getElementById('g2').style.background = "#ccffff";
      document.getElementById('g2').value = payload; 
    }
    
    if (topic == 'rangiegwapo/temp') { 
      document.getElementById('g3').style.background = "#ccffff";
      document.getElementById('g3').value = payload; 
    }
    
    if (topic == 'ricameo/temp') { 
      document.getElementById('g4').style.background = "#ccffff";
      document.getElementById('g4').value = payload; 
    }
    
    if (topic == 'yuJudy/temp') { 
      document.getElementById('g5').style.background = "#ccffff";
      document.getElementById('g5').value = payload; 
    }
    
    if (topic == 'patfaye/temp') {
      document.getElementById('g6').style.background = "#ccffff"; 
      document.getElementById('g6').value = payload; 
    }
    
    if (topic == 'leajay/temp') { 
      document.getElementById('g7').style.background = "#ccffff";
      document.getElementById('g7').value = payload; 
    }
    
    if (topic == 'Madam/temp') {
      document.getElementById('g8').style.background = "#ccffff"; 
      document.getElementById('g8').value = payload; 
    }
    
    if (topic == 'dugta/temp') {
      document.getElementById('g9').style.background = "#ccffff"; 
      document.getElementById('g9').value = payload; 
    }
    
    if (topic == 'janeGrace/temp') { 
      document.getElementById('g10').style.background = "#ccffff";
      document.getElementById('g10').value = payload; 
    }
    
    if (topic == 'iran/toring') {
      document.getElementById('g11').style.background = "#ccffff"; 
      document.getElementById('g11').value = payload; 
    }
    
    if (topic == 'Mars/Ners') { 
      document.getElementById('g12').style.background = "#ccffff";
      document.getElementById('g12').value = payload; 
    }


  })

}
// 

// basic functionalities
function disconnectFunc() {
  client.end();
  btnStatus.disabled = true;
  btnDisConnect.disabled = true;
  btnConnect.disabled = false;
  console.log('Disconnected');
  btnStatus.setAttribute('value', 'Disconnected successfully!')
  btnStatus.setAttribute('class', 'btn btn-warning')

}


