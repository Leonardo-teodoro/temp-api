import { Injectable } from '@nestjs/common';
import 'reflect-metadata';

@Injectable()
export class AppService {
  getHello(params: string): any {
    return params;
  }
}

