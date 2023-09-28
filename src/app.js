import express from 'express'
import userRouter from './routes/user.router.js'
import mockRouter from './routes/mock.router.js'
import errorHandler from './middlewares/error.js'

const app = express()
app.use('/api/users', userRouter)
app.use('/api/mockingproducts', mockRouter)
app.use(errorHandler)

app.listen(8080, () => console.log('Listening...'))