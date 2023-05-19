import {PgConnection} from "./helpers/pg-connection"
import {ProductRepository} from "./repositories/product"
import {ProductRegistrationService} from "./services/product-registration"

import {Request, Response, Router} from 'express'

const MakeProductRegistrationServiceInstance = async () => {
  const conn = new PgConnection()
  const client = await conn.load()
  const repository = new ProductRepository(client)
  const service = new ProductRegistrationService(repository)
  return service
}


const router = Router()

router.post('/product/', async (req: Request, res: Response) => {
  const service = await MakeProductRegistrationServiceInstance()
  const response = await service.exec(req.body)
  return res.send(response)
})
