import { HttpException } from '@nestjs/common';

export class ProductException extends HttpException {
  constructor(message?: string, status?: number) {
    super(message || 'Product not found!', status || 404);
  }
}
