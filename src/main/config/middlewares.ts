import { bodyParser } from '../middlewares/body-parser'

export default (app: any): void => {
  app.use(bodyParser)
}
