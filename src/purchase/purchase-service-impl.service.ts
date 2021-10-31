import { ForbiddenException, Injectable } from '@nestjs/common';
import { Product } from '../common/interfaces/Product';
import { ProductNotFoundException } from '../common/exception/ProductNotFoundException';
import { VendingMachineService } from '../vending-machine/vending-machine.service';
import { ProductsService } from '../products/products.service';
import { PurchaseReq } from '../common/interfaces/PurchaseRequest';
import { PurchaseService } from 'src/purchase/PurchaseService';

@Injectable()
export class PurchaseServiceImpl implements PurchaseService {
  constructor(
    private readonly produceService: ProductsService,
    private readonly vendingMachineService: VendingMachineService,
  ) {}

  public async purchase(purchaseRequest: PurchaseReq): Promise<PurchaseReq> {
    const { productId, amount } = purchaseRequest;
    const product: Product = await this.produceService.get(productId);

    if (!product) {
      throw new ProductNotFoundException();
    }

    if (product.stock === 0 || product.stock < amount) {
      throw new ForbiddenException('Sorry, we ran out of stock');
    }

    const totalCost = amount * product.cost;

    if (purchaseRequest.deposit < totalCost) {
      throw new ForbiddenException('Your deposit is not enough');
    }

    const change = purchaseRequest.deposit - totalCost;

    const vendingMachine = await this.vendingMachineService.queryBalance(
      purchaseRequest.vendingMachineId,
    );

    if (vendingMachine.totalCoins < change) {
      throw new ForbiddenException(
        'No enough coins left for your change, please insert exact amount',
      );
    }

    product.stock = product.stock - purchaseRequest.amount;
    await this.produceService.create(product);

    await this.vendingMachineService.insertBalance(
      purchaseRequest.vendingMachineId,
      purchaseRequest.deposit,
    );

    return purchaseRequest;
  }

  public async purchaseReturn(
    purchaseRequest: PurchaseReq,
  ): Promise<PurchaseReq> {
    const product: Product = await this.produceService.get(
      purchaseRequest.productId,
    );

    const vendingMachine = await this.vendingMachineService.queryBalance(
      purchaseRequest.vendingMachineId,
    );

    if (vendingMachine.totalCoins < product.cost) {
      throw new ForbiddenException('Not enough coins please for your refund');
    }
    product.stock = product.stock + purchaseRequest.amount;
    await this.produceService.create(product);

    await this.vendingMachineService.deductBalance(
      purchaseRequest.vendingMachineId,
      purchaseRequest.deposit,
    );

    return purchaseRequest;
  }
}
