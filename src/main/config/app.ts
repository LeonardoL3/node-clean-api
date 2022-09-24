import express from 'express'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'

const app = express()
setupMiddlewares(app)
setupRoutes(app)

app.get('/teste', (req: any, res: any) => {
  res.send(req.body)
})

export default app
