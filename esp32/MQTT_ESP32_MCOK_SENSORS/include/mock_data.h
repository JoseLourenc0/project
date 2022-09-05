#include <Arduino.h>
#include "esp-types.h"
#include "definitions.h"

interface_data_type mock_data_esp32[MOCK_DATA_QUANTITY];

void get_mock_data () {

    for(int i = 0; i < MOCK_DATA_QUANTITY ; i ++) {

        if(i <= MOCK_DATA_QUANTITY / 2 ) {
            mock_data_esp32[i].air_humidity = std::to_string(abs((100 - MOCK_DATA_QUANTITY - i)));
            mock_data_esp32[i].air_temperature = std::to_string(MOCK_DATA_QUANTITY + i);
            mock_data_esp32[i].soil_humidity = std::to_string(abs((90 - MOCK_DATA_QUANTITY - i)));
        } else {
            mock_data_esp32[i].air_humidity = std::to_string(abs((MOCK_DATA_QUANTITY - 100 + i)));
            mock_data_esp32[i].air_temperature = std::to_string(abs(2 * MOCK_DATA_QUANTITY - i));
            mock_data_esp32[i].soil_humidity = std::to_string(abs((MOCK_DATA_QUANTITY - 90 + i)));
        }
    }

}