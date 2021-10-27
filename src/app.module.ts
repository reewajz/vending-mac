import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductServiceProviderModule } from './products/products.module';
import config from './common/config';
import { VendingMachineServiceProviderModule } from './vending-machine/vending-machine.module';
import { PurchaseServiceProviderModule } from './purchase/purchase.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongoUri),
    ProductServiceProviderModule,
    VendingMachineServiceProviderModule,
    PurchaseServiceProviderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
