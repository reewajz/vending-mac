import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Product } from '../../common/interfaces/Product';

export class ProductsRequestDto implements Product {
  @IsString()
  @IsOptional()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;

  @IsNumber()
  @IsNotEmpty()
  readonly cost: number;

  @IsString()
  readonly type: string;

  @IsNumber()
  @IsOptional()
  public evaluatedOn: number;
}
