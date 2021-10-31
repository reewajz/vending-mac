import { Injectable } from '@nestjs/common';
import { Product } from '../common/interfaces/Product';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<Product>,
  ) {}

  public async create(product: Product) {
    product.insertedDate = product.insertedDate || Date.now();
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  public get(_id: string) {
    return this.productModel.findOne({ _id }).exec();
  }
}
