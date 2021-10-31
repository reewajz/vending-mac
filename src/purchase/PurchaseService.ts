import { PurchaseReq } from '../common/interfaces/PurchaseRequest';

export abstract class PurchaseService {
  /**
   * purchase
   */
  public abstract purchase(purchaseRequest: PurchaseReq): Promise<PurchaseReq>;

  /**
   * return purchase
   */
  public abstract purchaseReturn(
    purchaseRequest: PurchaseReq,
  ): Promise<PurchaseReq>;
}
