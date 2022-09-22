import express from 'express'
import setupMiddlewares from './middlewares'

const app = express()
setupMiddlewares(app)

app.get('/teste', (req: any, res: any) => {
  res.send(req.body)
})

export default app
