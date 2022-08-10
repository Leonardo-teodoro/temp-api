import { HttpService } from '@nestjs/axios';
import { IWeatherDTO } from '../dtos/IWeatherDataDTO';
import { Injectable } from '@nestjs/common';

import { map } from 'rxjs';

const API = 'https://api.openweathermap.org/data/2.5/weather';
@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService) {}
  public async getCitiesTemperature(query: IWeatherDTO) {
    query.appId = process.env.WEATHER_KEY;

    const result = this.httpService
      .get(
        `${API}?q=${query.q}&appid=${query.appId}&units=${
          query.units || 'metric'
        }&lang=${query.lang || 'pt_br'}`,
      )
      .pipe(map(resp => resp.data));

    return result;
  }
}
