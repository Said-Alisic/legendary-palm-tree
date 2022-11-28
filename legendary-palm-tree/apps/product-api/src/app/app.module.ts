import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { DatabaseModule } from '@libs/application';
import { ProductPricingsModule, ProductsModule } from './controllers';

@Module({
  imports: [CoreModule, DatabaseModule, ProductPricingsModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
