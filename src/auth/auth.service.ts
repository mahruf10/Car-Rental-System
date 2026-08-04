import jwt from "jsonwebtoken";
import { pool } from "../config/DB"
import bcrypt from "bcryptjs";
import config from "../config";
const loginUserService=async(email:string,password:string)=>{
    const user=await pool.query(`
        SELECT * FROM users WHERE email=$1
        `,[email])

        if(user.rowCount==0){
            return {message:'something went wrong'}
        }
        const isMatched=await bcrypt.compare(password,user.rows[0].password)
        const userInfo=user.rows[0]
       
        if(!isMatched){
         return false
        }
          const token=jwt.sign({name:userInfo.name,email:userInfo.email,role:userInfo.role,id:userInfo.id},config.jwt_secret as string,{
  expiresIn:'7h'
   })
   return ({userInfo,token})
        
   
       

}

export default loginUserService