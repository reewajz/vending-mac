import { Module } from '@nestjs/common';
import { VendingMachineController } from './vending-machine.controller';
import { VendingMachineService } from './vending-machine.service';
import { VendingMachineSchema } from './schemas/VendingMachineSchema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'VendingMachine', schema: VendingMachineSchema },
    ]),
  ],
  exports: [VendingMachineService],
  controllers: [VendingMachineController],
  providers: [VendingMachineService],
})
export class VendingMachineServiceProviderModule {}
