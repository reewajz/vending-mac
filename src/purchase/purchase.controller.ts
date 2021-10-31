import {
  Body,
  Controller,
  ForbiddenException,
  Post,
  Render,
} from '@nestjs/common';
import { PurchaseRequest } from './requests/PurchaseRequest';
import { PurchaseService } from './PurchaseService';
import { ProductNotFoundException } from '../common/exception/ProductNotFoundException';

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
  @Render('index')
  async purchase(@Body() purchaseRequest: PurchaseRequest) {
    try {
      return await this.purchaseService.purchase(purchaseRequest);
    } catch (error) {
      if (error instanceof ForbiddenException) {
        return { errorMessage: error.message };
      }

      if (error instanceof ProductNotFoundException) {
        return { errorMessage: error.message };
      }
    }
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
