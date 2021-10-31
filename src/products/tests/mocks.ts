import { ProductsService } from '../products.service';
import { mock } from '../../common/utils';

export const productService: ProductsService = mock<ProductsService>();
productService.create = jest.fn().mockImplementation(() => {
  return { id: 'testId', name: 'testName', cost: 40 };
});

productService.get = jest.fn().mockImplementation(() => {
  return { id: 'testId', name: 'testName', cost: 40 };
});
