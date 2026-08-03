import { Request,Response } from "express"
import { vehicleService } from "./vehicle.service"

const createVehicle=async(req:Request,res:Response)=>{
    try {
        const result=await vehicleService.createVehicle(req.body)
        console.log(result);
        res.status(200).send({
            success:true,
            message:'vehicle is inserted',
            data:result.rows[0]
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'There was an error,data could not be inserted...',
            details:error
        })
    }
    
}
const getVehicle=async(req:Request,res:Response)=>{
     try {
        const result=await vehicleService.getVehicle()
        res.status(200).send({
            success:true,
            message:'vehicle is fetched',
            data:result.rows
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'There was an error,data could not fetched...'
        })
    }
}
const getSingleVehicle=async(req:Request,res:Response)=>{
    const id=req.params.id
     try {
        const result=await vehicleService.getSingleVehicle(id as string)
        res.status(200).send({
            success:true,
            message:'vehicle is fetched',
            data:result.rows[0]
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'There was an error,vehicle could not fetched...'
        })
    }
}
const updateVehicle=async(req:Request,res:Response)=>{
   
     try {
        const result=await vehicleService.updateVehicle(req.body,req.params.id as string)
        res.status(200).send({
            success:true,
            message:'vehicle is updated',
            data:result.rows[0]
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'There was an error,vehicle could not updated...'
        })
    }
}
const deleteVehicle=async(req:Request,res:Response)=>{
    const id=req.params.id
     try {
        const result=await vehicleService.deleteVehicle(id as string)
        res.status(200).send({
            success:true,
            message:'vehicle is deleted',
            
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'There was an error,vehicle could not deleted...'
        })
    }
}

export const vehicleControler={
    createVehicle,
    getVehicle,
    getSingleVehicle,
    updateVehicle,
    deleteVehicle

}