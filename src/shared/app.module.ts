import { WeatherModule } from '../modules/weather/weather.module';
import { Module } from '@nestjs/common';
import { AppController } from '@shared/http/controllers/app.controller';
import { AppService } from '@shared/http/services/app.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule, WeatherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

