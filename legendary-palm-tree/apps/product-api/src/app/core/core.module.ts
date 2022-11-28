import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envDev } from '../../environments';
import { IEnvironment } from '../../environments/ienvironment';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [(): IEnvironment => envDev],
    }),
  ],
  controllers: [],
  providers: [],
})
export class CoreModule {}
