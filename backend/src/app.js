// Modules
import express from 'express'
import cors from 'cors'

import indexRoutes from './routes/indexRoutes'

// Initializations
const app = express()

// Settings
app.set('port', process.env.PORT || 4025)

// Middlewares
app.use(cors({
  origin: '*'
}))
app.use(express.json())

// Routes
app.use('/api', indexRoutes)

export default app