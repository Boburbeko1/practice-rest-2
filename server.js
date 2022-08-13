import express from 'express'
import cors from 'cors'
import booksRoutes from './routes/books.routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/books', booksRoutes)

app.listen(8080, () => {
  console.log('server is running..)');
})
