import { Request,Response } from "express";
import loginUserService from "./auth.service";

const loginUser=async(req:Request,res:Response)=>{
    const {email,password}=req.body
   
   
    try {
        const result=await loginUserService(email,password)
       if(!result){
        res.send({
            success:false,
            message:'email or password was wrong.Please try again..',
            data:result
          
        })
       }else{
          res.send({
            success:true,
            message:'login successfully Complete...',
            data:result
          
        })
       }
      
    } catch (err:any) {
        console.log(err);
        res.send({
            success:false,
            message:err.message
        })
    }
    

}
export default loginUser