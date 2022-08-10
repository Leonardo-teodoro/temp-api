import { HttpService } from '@nestjs/axios';
import { IWeatherDTO } from '../../../dtos/IWeatherDataDTO';
import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from '@modules/weather/services/weather.service';

@Controller()
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('cities/temperature')
  findAndCountCitiesTemperature(@Query() query: IWeatherDTO): {} {
    return this.weatherService.getCitiesTemperature(query);
  }
}
