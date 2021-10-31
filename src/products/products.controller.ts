import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsRequestDto } from './requests/ProductsRequestDto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  /**
   * @api {get} /products/:id Get product by id
   * @apiName get product
   * @apiGroup product
   *
   *
   */
  @Get('/:id')
  async get(@Param() id: string) {
    return this.productService.get(id);
  }

  /**
   * @api {post} /products/ create new product
   * @apiName create product
   * @apiGroup product
   *
   *
   */
  @Post()
  async create(@Body() product: ProductsRequestDto) {
    return this.productService.create(product);
  }
}
