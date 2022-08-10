import { IWeatherDTO } from '@modules/weather/dtos/IWeatherDataDTO';
import { Controller, Get, Query } from '@nestjs/common';

import { AppService } from '@shared/http/services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}

