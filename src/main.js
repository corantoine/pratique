import express from 'express'
import loginRouter from './routers/login.js'
import { accesslogMiddleware } from './middlewares/accesslog.js'

const app = express()
const host = process.env.HOST ?? 'localhost'
const port = Number(process.env.PORT) || 3000

app.use(accesslogMiddleware)

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

app.use(loginRouter)

// Start the server
app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
});
