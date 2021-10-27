import { ForbiddenException, Injectable } from '@nestjs/common';
import { PurchaseRequest } from './requests/PurchaseRequest';
import { Product } from '../common/interfaces/Product';
import { ProductException } from '../common/exception/ProductException';
import { VendingMachineService } from '../vending-machine/vending-machine.service';
import { ProductsService } from '../products/products.service';

@Injectable()
export class PurchaseService {
  constructor(
    private readonly produceService: ProductsService,
    private readonly vendingMachineService: VendingMachineService,
  ) {}

  public async purchase(
    purchaseRequest: PurchaseRequest,
  ): Promise<Array<Product>> {
    const { productId, amount } = purchaseRequest;
    const product: Product = await this.produceService.get(productId);

    if (!product) {
      throw new ProductException();
    }

    if (product.stock === 0 || product.stock < amount) {
      throw new ForbiddenException('Sorry, we ran out of stock');
    }

    const totalCost = amount * product.cost;

    // this.vendingMachineService.

    if (purchaseRequest.deposit < totalCost) {
      throw new ForbiddenException('Your deposit is not enough');
    }

    const change = purchaseRequest.deposit - totalCost;

    // return await this.productModel.find();
    return;
  }

  public purchaseReturn() {}
}
