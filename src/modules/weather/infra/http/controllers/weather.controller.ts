import { IWeatherDTO } from '../../../dtos/IWeatherDataDTO';
import { Controller, Get, Header, Query } from '@nestjs/common';
import { WeatherService } from '@modules/weather/services/weather.service';

@Controller()
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('cities/temperature')
  @Header('Access-Control-Allow-Origin', 'http://localhost:3000')
  findAndCountCitiesTemperature(@Query() query: IWeatherDTO) {
    return this.weatherService.getCitiesTemperature(query);
  }
}
