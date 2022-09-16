#include <Arduino.h>
#include <cstdio>
#include "esp-types.h"
//? LIB WIFI
#include <WiFi.h>

//? LIB MQTT
#include <PubSubClient.h>

//? CONSTS MQTT
WiFiClient wifiClient;
PubSubClient mqttClient(wifiClient); 

//? FUNCTION WIFI
void mqtt_connectToWiFi(char * SSID, char * WIFI_PASSWORD) {
    Serial.print("Connecting...");

    WiFi.begin(SSID, WIFI_PASSWORD);
    while(WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        delay(500);
    }

    Serial.println("Connected!");
}

//? FUNCTION MQTT
void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Callback - ");
  Serial.print("Message:");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println("");
}

void mqtt_setupMQTT(char *mqttServer, int mqttPort) {
  mqttClient.setServer(mqttServer, mqttPort);
  // set the callback function
  mqttClient.setCallback(callback);
}

void mqtt_reconnect() {
  Serial.println("Connecting to MQTT Broker...");
  while (!mqttClient.connected()) {
      Serial.println("Reconnecting to MQTT Broker..");
      String clientId = "ESP32Client-";
      clientId += String(random(0xffff), HEX);
      
      if (mqttClient.connect(clientId.c_str())) {
        Serial.println("Connected.");
        // subscribe to topic
        mqttClient.subscribe("test/#");
      }
      
  }
}

//? SETUP
void mqtt_setup(char * SSID = "", char * WIFI_PASSWORD = "", char *mqttServer = "10.42.0.1", int mqttPort = 1883) {
    Serial.begin(115200);
    mqtt_connectToWiFi(SSID, WIFI_PASSWORD);
    mqtt_setupMQTT(mqttServer, mqttPort);
}

//? MAIN
void mqtt_main(
  std::string environment, 
  std::string place_id, 
  std::string product_id,
  interface_data_type sensors_data
  ) {
  if (!mqttClient.connected())
    mqtt_reconnect();
  mqttClient.loop();

  //* PUBLISHER
  std::string data = "{\"air_temperature\":" + sensors_data.air_temperature + ",\"air_humidity\":" + sensors_data.air_humidity + ",\"soil_humidity\":" + sensors_data.soil_humidity + "}";
  const char *p_data = data.c_str();

  // std::string topic = environment + "/" + place_id + "/" + product_id;
  std::string topic = environment + "/" + product_id;
  const char*p_topic = topic.c_str();
  mqttClient.publish(p_topic, p_data);
}