import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import './utils/format';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(7001);
  console.log('server running at http://localhost:7001');
}
bootstrap();
