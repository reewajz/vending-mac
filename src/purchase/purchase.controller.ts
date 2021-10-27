import { Body, Controller, Post } from '@nestjs/common';
import { PurchaseRequest } from './requests/PurchaseRequest';
import { PurchaseService } from './purchase.service';

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post('/purchase')
  async purchase(@Body() purchaseRequest: PurchaseRequest) {
    return await this.purchaseService.purchase(purchaseRequest);
  }

  @Post('/return')
  async return() {
    return await this.purchaseService.purchaseReturn();
  }
}
