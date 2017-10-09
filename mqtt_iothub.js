'use strict';
//MQTT_TCP
var mqtt = require('mqtt');
var mqttServer = 'mqtt://localhost:1883'
var options = {
 config.mqttusername,
 config.mqttpassword
};

var mqttclient = mqtt.connect(mqttServer, options); //var client = mqtt.connect(mqttServer, options);

//IoT HUB
var clientFromConnectionString = require('azure-iot-device-mqtt').clientFromConnectionString;
var Message = require('azure-iot-device').Message;

var connectionString = config.iothub;
var iotclient = clientFromConnectionString(connectionString);

mqttclient.subscribe('GW/Event');

mqttclient.on('message', function (topic, message) {
sendMessage(message.toString());
});

function sendMessage(payload) {
  var message = new Message(payload);
  console.log("Sending message: " + message.getData());
  iotclient.sendEvent(message);
};


// function sendMessage(payload) {
//   // var rtls = JSON.parse(payload);
//   // var rtls = payload;
//   // var rtlspayload = JSON.stringify({deviceId:'lcp-test', EventTime:rtls.EventTime, TimeStamp:rtls.TimeStamp, GatewayID:rtls.GatewayID, TagID:rtls.TagID, rssi:rtls.rssi, Transaction:rtls.Transaction, Temperature:rtls.Temperature, Humidity:rtls.Humidity, SensorID:rtls.SensorID, DispenserStatus:rtls.DispenserStatus, RefillSerial:rtls.RefillSerial, SensorBattery:rtls.SensorBattery, TagBattery:rtls.TagBattery });
//   var message = new Message(payload);
//   console.log("Sending message: " + message.getData());
//   iotclient.sendEvent(message);
// };
