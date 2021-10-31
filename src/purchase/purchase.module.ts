import { Module } from '@nestjs/common';
import { PurchaseController } from './purchase.controller';
import { PurchaseServiceImpl } from './purchase-service-impl.service';
import { VendingMachineServiceProviderModule } from '../vending-machine/vending-machine.module';
import { ProductServiceProviderModule } from '../products/products.module';
import { PurchaseService } from './PurchaseService';

@Module({
  imports: [VendingMachineServiceProviderModule, ProductServiceProviderModule],
  controllers: [PurchaseController],
  providers: [{ provide: PurchaseService, useClass: PurchaseServiceImpl }],
})
export class PurchaseServiceProviderModule {}
