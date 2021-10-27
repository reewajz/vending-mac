import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PaymentMethod } from '../../common/interfaces/PaymentMethod';

export class PurchaseRequest {
  @IsString()
  @IsNotEmpty()
  readonly productId: string;

  @IsNumber()
  @IsNotEmpty()
  readonly amount: number;

  @IsNumber()
  @IsNotEmpty()
  readonly deposit: number;

  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  @IsString()
  vendingMachineId: string;
}
