import { Body, Controller, Post } from '@nestjs/common';
import { PurchaseRequest } from './requests/PurchaseRequest';
import { PurchaseService } from './PurchaseService';

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  /**
   * @api {post} /purchase/purchase Purchase request
   * @apiName purchase request
   * @apiGroup purchase
   *
   *
   */
  @Post('/purchase')
  async purchase(@Body() purchaseRequest: PurchaseRequest) {
    return await this.purchaseService.purchase(purchaseRequest);
  }

  /**
   * @api {post} /purchase/return Purchase return request
   * @apiName purchase return
   * @apiGroup purchase
   *
   *
   */
  @Post('/return')
  async return(purchaseRequest: PurchaseRequest) {
    return await this.purchaseService.purchaseReturn(purchaseRequest);
  }
}
