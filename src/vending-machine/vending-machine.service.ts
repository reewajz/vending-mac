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
  public async queryBalance(_id: string): Promise<VendingMachine> {
    return this.vendingMachine.findOne({ _id });
  }

  public async insertBalance(_id: string, amount: number) {
    const vendingMachine = await this.vendingMachine.findOne({ _id });
    vendingMachine.totalCoins = vendingMachine.totalCoins + amount;
    return vendingMachine.save();
  }

  public async deductBalance(_id: string, amount: number) {
    const vendingMachine = await this.vendingMachine.findOne({ _id });
    vendingMachine.totalCoins = vendingMachine.totalCoins - amount;
    return vendingMachine.save();
  }
}
