#include <Arduino.h>
#include "definitions.h"
// #include "mqtt_config.h"
#include "http_config.h"
#include "esp-types.h"
#include "mock_data.h"

//? CONSTS WIFI
char * SSID = "TesteESP32";
char * WIFI_PASSWORD = "numero42";

//? CONSTS MQTT
char *MQTT_URL = "44.201.185.178";
int MQTT_PORT = 1883;

//? CONSTS HTTP
char* HTTP_SERVER = "http://192.168.152.89:8500/regs";

std::string environment = "test";
std::string place_id = "1";
std::string product_id = "1";

void setup() {
  // mqtt_setup(SSID, WIFI_PASSWORD, MQTT_URL, MQTT_PORT);
  http_setup(SSID, WIFI_PASSWORD);

  // ? Calling mock data constructor
  get_mock_data();
}

void loop() {

  // interface_data_type sensor_data;

  for(int i = 0 ; i <= MOCK_DATA_QUANTITY ; i ++) {
    // mqtt_main(environment,place_id,product_id,mock_data_esp32[i]);
    http_main(HTTP_SERVER, product_id, mock_data_esp32[i]);
    delay(DELAY_TIME);
  }

}