import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseController } from '../purchase.controller';
import { mock } from '../../common/utils';
import { PurchaseService } from '../PurchaseService';

describe('PurchaseController', () => {
  let controller: PurchaseController;

  beforeEach(async () => {
    const purchaseService: PurchaseService = mock<PurchaseService>();
    purchaseService.purchase = jest.fn().mockImplementation(() => {
      return { productId: 'testId', amount: 1, deposit: 40 };
    });

    purchaseService.purchaseReturn = jest.fn().mockImplementation(() => {
      return { productId: 'testId', amount: 1, deposit: 40 };
    });
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseController],
      providers: [{ provide: PurchaseService, useValue: purchaseService }],
    }).compile();

    controller = module.get<PurchaseController>(PurchaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
