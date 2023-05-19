import {IProductRepository} from "../interfaces/repositories";
import {ProductProps} from "../@types";
import {IClient} from "../helpers/pg-connection";

export class ProductRepository implements IProductRepository {

  constructor(private readonly client: IClient) { }

  async create(product: ProductProps): Promise<void> {
    const sql = 'INSERT INTO products(name,description,price,freight,totalPrice) VALUES ($1,$2,$3,$4,$5);';
    const values = [
      product.name,
      product.description,
      product.price,
      product.freight,
      product.totalPrice
    ];
    await this.client.query(sql, values);
  }
}
