import { pool } from "../config/DB"
import bcrypt from "bcryptjs";
const createUser=async(payload:Record<string,unknown>)=>{
    const{name,email,password,phone,role}=payload

   const hashedPass=await bcrypt.hash(password as string, 10);

    const result=await pool.query(`
        INSERT INTO users(name,email,password,phone,role) VALUES($1,$2,$3,$4,$5) RETURNING *
        `,[name as string,email as string,hashedPass,phone as string,role as string])
       return result
}

const getUser=async()=>{
    const result=await pool.query(`
        SELECT * FROM users
        `)
        
        return result
}
const getSingleUser=async(id:string)=>{
    const result=await pool.query(`
        SELECT * FROM users WHERE id=$1
        `,[id])
        return result
}
const updateUser=async(payload:Record<string,unknown>,id:string)=>{
    const{name,email,role}=payload
    const user=await getSingleUser(id)
    if(user.rows[0].role!=='admin'){

       const result=await pool.query(`
        UPDATE users SET name=$1,email=$2 WHERE id=$3 RETURNING *
        `,[name,email,id])
        return result
    }
     const result=await pool.query(`
        UPDATE users SET name=$1,email=$2,role=$3 WHERE id=$4 RETURNING *
        `,[name,email,role,id])
        return result
}
const deleteUser=async(id:string)=>{
    const result=await pool.query(`
        DELETE FROM users WHERE id=$1
        `,[id])
        return result
}
export const userService={
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser
}