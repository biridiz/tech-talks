const MAX_VALUE_FOR_FREE_FREIGHT = 200
const VALUE_FREIGHT = 60
const FREE_FREIGHT = 0

export class CalculateFreight {
  private readonly value: number

  constructor(private readonly price: number) {
    if (this.price < MAX_VALUE_FOR_FREE_FREIGHT) {
      this.value = VALUE_FREIGHT

    } else {
      this.value = FREE_FREIGHT
    }
  }

  getValue() {
    return this.value
  }
}
