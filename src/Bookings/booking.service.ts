import { pool } from "../config/DB"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import config from "../config";
const createBooking=async(payload:Record<string,unknown>)=>{

    const{rent_start_date,rent_end_date,total_price,status,vehicle_id,customer_id}=payload

    const result=await pool.query(`
        INSERT INTO bookings(rent_start_date,rent_end_date,total_price,status,vehicle_id,customer_id) VALUES($1,$2,$3,$4,$5,$6) RETURNING *
        `,[rent_start_date as Date,rent_end_date as Date,total_price as number,status as string,vehicle_id ,customer_id ])
      
        return result
//    const token=jwt.sign({name:user.name,email:user.email,role:user.role},config.jwt_secret as string,{
//     expiresIn:'7h'
//    })
}

const getBookings=async()=>{
    const result=await pool.query(`
        SELECT * FROM bookings
        `)
        return result
}
const getSingleBooking=async(id:string)=>{
    const result=await pool.query(`
        SELECT * FROM bookings WHERE id=$1
        `,[id])
     
        return result
}
const updateBooking=async(payload:Record<string,unknown>,id:string)=>{
    const{status}=payload
    const result=await pool.query(`
        UPDATE bookings SET status=$1 WHERE id=$2 RETURNING *
        `,[status,id])
        return result
}
const deleteBooking=async(id:string)=>{
    const result=await pool.query(`
        DELETE FROM bookings WHERE id=$1
        `,[id])
        return result
}
export const bookingService={
    createBooking,
    getBookings,
    getSingleBooking,
    updateBooking,
    deleteBooking
}