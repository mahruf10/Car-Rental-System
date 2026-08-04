import { Request,Response } from "express"
import { userService } from "./user.service";
import { JwtPayload } from "jsonwebtoken";


const createUser=async(req:Request,res:Response)=>{
    try {
        const result=await userService.createUser(req.body)
        res.status(200).send({
            success:true,
            message:'User create successfully.',
            data:result.rows[0]
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'There was an error...'
        })
    }
    
}
const getUser=async(req:Request,res:Response)=>{
     try {
        const result=await userService.getUser()
        res.status(200).send({
            success:true,
            message:'data is fetched',
            data:result.rows
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'There was an error,data could not fetched...'
        })
    }
}
const getSingleUser=async(req:Request,res:Response)=>{
    const id=req.params.id
     try {
        const result=await userService.getSingleUser(id as string)
        res.status(200).send({
            success:true,
            message:'user is fetched',
            data:result.rows[0]
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'There was an error,user could not fetched...'
        })
    }
}
const updateUser=async(req:Request,res:Response)=>{

    const loggedUser:any=req.user
    
    if(loggedUser.role!=='admin' && loggedUser.id!==Number(req.params.id) ){
        return res.status(403).send({message:'forbidden access'})
    }
   
     try {
        const result=await userService.updateUser(req.body,req.params.id as string)
        res.status(200).send({
            success:true,
            message:'user is updated',
            data:result.rows[0]
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'There was an error,user could not updated...'
        })
    }
}
const deleteUser=async(req:Request,res:Response)=>{
    const id=req.params.id
     try {
        const result=await userService.deleteUser(id as string)
        res.status(200).send({
            success:true,
            message:'user is deleted',
            
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'There was an error,user could not deleted...'
        })
    }
}

export const userControler={
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser

}