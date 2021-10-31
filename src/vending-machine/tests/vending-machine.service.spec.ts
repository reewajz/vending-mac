import { Test, TestingModule } from '@nestjs/testing';
import { VendingMachineService } from '../vending-machine.service';
import { getModelToken } from '@nestjs/mongoose';
import { VendingMachineSchema } from '../schemas/VendingMachineSchema';

describe('VendingMachineService', () => {
  let service: VendingMachineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VendingMachineService,
        {
          provide: getModelToken('VendingMachine'),
          useValue: VendingMachineSchema,
        },
      ],
    }).compile();

    service = module.get<VendingMachineService>(VendingMachineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
