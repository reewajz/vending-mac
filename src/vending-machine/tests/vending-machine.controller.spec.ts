import { Test, TestingModule } from '@nestjs/testing';
import { VendingMachineController } from '../vending-machine.controller';
import { VendingMachineService } from '../vending-machine.service';
import { mock } from '../../common/utils';

describe('VendingMachineController', () => {
  let controller: VendingMachineController;

  beforeEach(async () => {
    const vendingMachineService: VendingMachineService =
      mock<VendingMachineService>();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendingMachineController],
      providers: [
        { provide: VendingMachineService, useValue: vendingMachineService },
      ],
    }).compile();

    controller = module.get<VendingMachineController>(VendingMachineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
