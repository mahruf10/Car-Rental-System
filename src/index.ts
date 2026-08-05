import { Request,Response } from "express"
import config from "./config"
import initDb from "./config/DB"
import userRouter from "./users/user.router"
import vehicleRouter from "./vehicles/vehicle.router"
import bookingRouter from "./Bookings/booking.router"
import authRouter from "./auth/auth.router"

const express=require("express")
const app=express()
const port=config.port
app.use(express.json())
app.get("/",(req:Request,res:Response)=>{
    res.send("server is runnig.let's goooo!.....")
})

initDb()

//users
app.use('/users',userRouter)
//vehicles
app.use('/vehicles',vehicleRouter)
//bookings
app.use('/bookings',bookingRouter)
//auth
app.use('/auth',authRouter)
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
