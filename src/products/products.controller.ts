import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsRequestDto } from './requests/ProductsRequestDto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get('/:id')
  async get(@Param() id: string) {
    return this.productService.get(id);
  }

  @Post()
  async create(@Body() product: ProductsRequestDto) {
    return this.productService.create(product);
  }

  @Put()
  async update(@Body() product: ProductsRequestDto) {
    return this.productService.update(product);
  }
}
