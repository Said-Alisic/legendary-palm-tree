import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bodyParser: false,
  });

  const config: ConfigService = app.get(ConfigService);

  const port = config.get<number>('port');

  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/');
  });
}

bootstrap();
