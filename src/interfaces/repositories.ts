import {ProductProps} from '../@types'

export interface IProductRepository {
  create(product: ProductProps): Promise<void>
}
