import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ProductsDto } from './dto/products.dto';

@Controller('products')
export class ProductsController {
  @Post()
  purchase(@Body() purchaseRequest: ProductsDto) {
    return 'This is test!!';
  }

  @Put()
  return() {
    return 'This is test!!';
  }
}
