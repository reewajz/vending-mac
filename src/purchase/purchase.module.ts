import { Module } from '@nestjs/common';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';
import { VendingMachineServiceProviderModule } from '../vending-machine/vending-machine.module';
import { ProductServiceProviderModule } from '../products/products.module';

@Module({
  imports: [VendingMachineServiceProviderModule, ProductServiceProviderModule],
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseServiceProviderModule {}
