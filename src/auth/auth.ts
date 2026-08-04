import {Request,Response, NextFunction } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import config from "../config"

const auth=(...role:string[])=>{
    return (req:Request,res:Response,next:NextFunction)=>{

        try {
             const token=req.headers.authorization
        if(!token){
            return res.status(401).json({message:'unAuthorized'})
        }

        const decoded=jwt.verify(token,config.jwt_secret as string) as JwtPayload
       
        req.user=decoded
        
        if(role.length && !role.includes(decoded.role as string)){
            return res.status(403).send({message:'forbidden access'})
        }
        next()
        } catch (err:any) {
            res.send(err.message)
        }
      
    }
}
export default auth