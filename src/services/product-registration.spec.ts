import {test, expect} from "vitest"
import {ProductRegistrationService} from "./product-registration"
import {ProductRepositoryInMemory} from "../repositories/in-memory/product";

test("Deve registrar o produto", async () => {
  const repository = new ProductRepositoryInMemory()
  const service = new ProductRegistrationService(repository)
  await service.exec({
    name: "JBL",
    description: "Tunts Tunts",
    price: 500
  })
  expect(repository.products).toHaveLength(1)
})
