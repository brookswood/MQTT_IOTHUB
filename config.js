/** Declare config values **/

var config = {};

//mqtt connection
config.mqttservername = process.env.MQTT_SERVER;
config.mqtttopic = process.env.MQTT_TOPIC;

// mqtt Authentication
config.mqttusername = process.env.MQTT_USERNAME;
config.mqttpassword = process.env.MQTT_PASSWORD;

//IoT HUB Auth
config.iothub = process.env.IOT_HUB;

module.exports = config;
