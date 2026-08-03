import { pool } from "../config/DB"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import config from "../config";
const createVehicle=async(payload:Record<string,unknown>)=>{

    const{vehicle_name,type,registration_number,daily_rent_price,availability_status}=payload

    const result=await pool.query(`
        INSERT INTO vehicles(vehicle_name,type,registration_number,daily_rent_price,availability_status) VALUES($1,$2,$3,$4,$5) RETURNING *
        `,[vehicle_name as string,type as string,registration_number as number,daily_rent_price as number,availability_status as string])
      
        return result
//    const token=jwt.sign({name:user.name,email:user.email,role:user.role},config.jwt_secret as string,{
//     expiresIn:'7h'
//    })
}

const getVehicle=async()=>{
    const result=await pool.query(`
        SELECT * FROM vehicles
        `)
        return result
}
const getSingleVehicle=async(id:string)=>{
    const result=await pool.query(`
        SELECT * FROM vehicles WHERE id=$1
        `,[id])
        return result
}
const updateVehicle=async(payload:Record<string,unknown>,id:string)=>{
    const{daily_rent_price,availability_status}=payload
    const result=await pool.query(`
        UPDATE users SET daily_rent_price=$1,availability_status=$2 WHERE id=$3 RETURNING *
        `,[daily_rent_price,availability_status,id])
        return result
}
const deleteVehicle=async(id:string)=>{
    const result=await pool.query(`
        DELETE FROM vehicles WHERE id=$1
        `,[id])
        return result
}
export const vehicleService={
    createVehicle,
    getVehicle,
    getSingleVehicle,
    updateVehicle,
    deleteVehicle
}