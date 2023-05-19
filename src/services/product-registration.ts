import {IProductRepository} from "../interfaces/repositories";
import {ProductProps, RegisterProductProps} from "../@types";
import {Product} from "../entities/product";

export class ProductRegistrationService {
  constructor(private readonly productRepository: IProductRepository) { }

  async exec({name, description, price}: RegisterProductProps): Promise<ProductProps> {
    const product = new Product(name, description, price)
    await this.productRepository.create(product.data)
    return product.data
  }
}
