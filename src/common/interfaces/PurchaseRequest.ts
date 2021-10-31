import { PaymentMethod } from './PaymentMethod';

export interface PurchaseReq {
  readonly productId: string;

  readonly amount: number;

  readonly deposit: number;

  paymentMethod?: PaymentMethod;

  vendingMachineId: string;
}
