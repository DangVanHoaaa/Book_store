import dotenv from 'dotenv'
dotenv.config()

import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

import connectDB from './config/db'
import routes from './routes'
const app: Express = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/v1', routes)
// Route test
app.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Book Store API Server (TypeScript) đang hoạt động bình thường!'
  })
})

const PORT: number = Number(process.env.PORT) || 3000

// Kết nối DB 
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(` Server đang chạy tại: http://localhost:${PORT}`)
  })
})

export default app