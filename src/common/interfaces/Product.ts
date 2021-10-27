/**
 * Product interface
 */
export interface Product {
  /**
   * product id
   */
  id?: string;

  /**
   * product name
   */
  name: string;

  /**
   * product stock
   */
  stock?: number;

  /**
   * product cost
   */
  cost: number;

  /**
   * product type
   */
  type?: string;

  /**
   * product inserted date
   */
  insertedDate?: number;
}
