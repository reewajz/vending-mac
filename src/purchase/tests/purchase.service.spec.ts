import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseServiceImpl } from '../purchase-service-impl.service';
import { ProductsService } from '../../products/products.service';
import { VendingMachineService } from '../../vending-machine/vending-machine.service';

describe('PurchaseService', () => {
  let service: PurchaseServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PurchaseServiceImpl,
        {
          provide: ProductsService,
          useValue: {},
        },
        {
          provide: VendingMachineService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<PurchaseServiceImpl>(PurchaseServiceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
