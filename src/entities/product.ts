import {CalculateFreight} from "./calculate-freight";
import {ProductProps} from "../@types";

export class Product {
  private freight: number
  private totalPrice: number

  constructor(
    private readonly name: string,
    private readonly description: string,
    private readonly price: number
  ) {
    this.calculateFreight()
    this.calculateTotalPrice()
  }

  get data(): ProductProps {
    return {
      name: this.name,
      description: this.description,
      price: this.price,
      freight: this.freight,
      totalPrice: this.totalPrice
    }
  }

  calculateFreight() {
    this.freight = new CalculateFreight(this.price).getValue()
  }

  calculateTotalPrice() {
    this.totalPrice = this.price + this.freight
  }
}
