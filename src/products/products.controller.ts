import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { ProductsRequestDto } from './requests/ProductsRequestDto';
import { ProductsService } from './products.service';
import { Response } from 'express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  root(@Res() res: Response) {
    return res.render('index');
  }

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
