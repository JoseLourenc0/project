#include <Arduino.h>
#include "esp-types.h"
#include <string.h>
//? LIB WIFI
#include <WiFi.h>

//? LIB HTTP
#include <HTTPClient.h>

//? FUNCTION WIFI
void http_setup(char * SSID, char * WIFI_PASSWORD) {
    Serial.begin(115200);
    Serial.print("Connecting...");

    WiFi.begin(SSID, WIFI_PASSWORD);
    while(WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        delay(500);
    }

    Serial.println("Connected!");
}

float timeinMin(float t){
  return t*60000;
}

void http_main(char* serverName, std::string product_id, interface_data_type sensors_data) {
    if(WiFi.status()==WL_CONNECTED){
        WiFiClient client;
        HTTPClient http;

        http.begin(client, serverName);
        http.addHeader("Content-Type", "application/json");

        std::string data = "{\"device_id\": " + product_id + ",\"air_temperature\":" + sensors_data.air_temperature + ",\"air_humidity\":" + sensors_data.air_humidity + ",\"soil_humidity\":" + sensors_data.soil_humidity + "}";

        String httpRequestData = data.c_str();

        int httpResponseCode = http.POST(httpRequestData);
        Serial.print("HTTP Response code: ");
        Serial.println(httpResponseCode);

        http.end();
    } else {
        Serial.println("WIFI Connection ERROR");
    }
    Serial.println("==========================");
}