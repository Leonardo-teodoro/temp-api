import { Injectable } from '@nestjs/common';
import 'reflect-metadata';

@Injectable()
export class AppService {
  getHello(): any {
    return 'hello World';
  }
}

