import express from 'express'
import testRoutes from './routes/test.routes.js'

const app = express()

app.use("/api", testRoutes)


export default app