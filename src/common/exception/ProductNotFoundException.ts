import { HttpException } from '@nestjs/common';

export class ProductNotFoundException extends HttpException {
  constructor(message?: string) {
    super(message || 'Product not found!', 404);
  }
}
