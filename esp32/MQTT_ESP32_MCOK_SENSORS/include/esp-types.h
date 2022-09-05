#ifndef SENSOR_H_
#define SENSOR_H_
#include <cstdio>
#include <string>

struct interface_data_type
{
    std::string air_temperature;
    std::string air_humidity;
    std::string soil_humidity;
};

#endif