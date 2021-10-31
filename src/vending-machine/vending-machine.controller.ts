import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VendingMachineService } from './vending-machine.service';

@Controller('vending-machine')
export class VendingMachineController {
  constructor(private readonly vendingMachineService: VendingMachineService) {}

  /**
   * @api {get} /vending-machine/:id Get vending-machine by id
   * @apiName get vending-machine
   * @apiGroup vending-machine
   *
   *
   */
  @Get('/:id')
  async queryBalance(@Param('id') id: string) {
    return await this.vendingMachineService.queryBalance(id);
  }

  /**
   * @api {post} /vending-machine insert balance of vending-machine by id
   * @apiName increase amount
   * @apiGroup vending-machine
   *
   *
   */
  @Post('/insert/:id')
  async insertBalance(@Param('id') id: string, @Body() amount: number) {
    return await this.vendingMachineService.insertBalance(id, amount);
  }

  /**
   * @api {post} /vending-machine deduct balance of vending-machine by id
   * @apiName deduct amount
   * @apiGroup vending-machine
   *
   *
   */
  @Post('/deduct/:id')
  async deductBalance(@Param('id') id: string, @Body() amount: number) {
    return await this.vendingMachineService.deductBalance(id, amount);
  }
}
