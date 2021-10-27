import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VendingMachineService } from './vending-machine.service';

@Controller('vending-machine')
export class VendingMachineController {
  constructor(private readonly vendingMachineService: VendingMachineService) {}

  @Get('/:id')
  async queryBalance(@Param('id') id: string) {
    return await this.vendingMachineService.queryBalance(id);
  }

  @Post()
  insertBalance(@Body() amount: number) {}
}
