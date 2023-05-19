import {test, expect} from "vitest"
import {CalculateFreight} from "./calculate-freight"

test("Deve definir o valor do frete igual a 60 se o preço do produto for menor que 200", () => {
  const freight = new CalculateFreight(199)
  expect(freight.getValue()).toEqual(60)
})

test("Deve definir o valor do frente como 0 caso se o preço do produto for maior que 200", () => {
  const freight = new CalculateFreight(200)
  expect(freight.getValue()).toEqual(0)
})
