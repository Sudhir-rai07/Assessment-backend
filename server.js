import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import connectToDB from './db/db.js'
dotenv.config()
const app = express()
const PORT = process.env.PORT


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

import authRoute from './routes/auth.routes.js'
import taskRoute from './routes/task.routes.js'
import contactRoute from './routes/contact.routes.js'
app.use("/api/auth",authRoute )
app.use("/api/task", taskRoute)
app.use("/api/contact", contactRoute)


app.get("/", (req, res)=>{
    res.json({hello: "Working nice"})
})

app.listen(PORT, ()=>{
    connectToDB()
    console.log(`App is running on port ${PORT}`)
})