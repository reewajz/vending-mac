import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { VendingMachine } from './interfaces/VendingMachine';

@Injectable()
export class VendingMachineService {
  constructor(
    @InjectModel('VendingMachine')
    private readonly vendingMachine: Model<VendingMachine>,
  ) {}
  public async queryBalance(_id: string) {
    return this.vendingMachine.findOne({ _id });
  }

  public async insertBalance(amount: number) {
    return this.vendingMachine.create(amount);
  }
}
