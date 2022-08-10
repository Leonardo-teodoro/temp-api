import { NestFactory } from '@nestjs/core';
import { AppModule } from '@shared/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders:
      'Origin, Content-Type, X-Auth-Token, access-control-allow-methods',
  });
  await app.listen(3333);
}
bootstrap();

