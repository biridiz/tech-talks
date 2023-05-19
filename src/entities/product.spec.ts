import {test, expect} from "vitest"
import {Product} from "./product"

test("Deve calcular o frete e o preço total ao criar uma instância do produto", () => {
  const product = new Product("JBL", "Tunts Tunnts", 500)
  expect(product.data.freight).not.toEqual(undefined)
  expect(product.data.freight).toEqual(0)
  expect(product.data.totalPrice).toEqual(500)
})
