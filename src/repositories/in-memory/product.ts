import {IProductRepository} from "../../interfaces/repositories";
import {ProductProps} from "../../@types";

export class ProductRepositoryInMemory implements IProductRepository {
  public products: ProductProps[] = []

  async create(product: ProductProps): Promise<void> {
    this.products.push(product)
  }
}
