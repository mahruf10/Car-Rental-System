import { Request,Response } from "express"
import { bookingService } from "./booking.service";

const createBooking=async(req:Request,res:Response)=>{
    try {
        const result=await bookingService.createBooking(req.body)
        console.log(result);
        res.status(200).send({
            success:true,
            message:'info is inserted',
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
const getBookings=async(req:Request,res:Response)=>{
     try {
        const result=await bookingService.getBookings()
        res.status(200).send({
            success:true,
            message:'booking Info is fetched',
            data:result.rows
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'There was an error,data could not fetched...'
        })
    }
}
const getSingleBooking=async(req:Request,res:Response)=>{
    const id=req.params.id
     try {
        const result=await bookingService.getSingleBooking(id as string)
        res.status(200).send({
            success:true,
            message:'data is fetched',
            data:result.rows[0]
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'There was an error,bookingData could not fetched...'
        })
    }
}
const updateBooking=async(req:Request,res:Response)=>{
   
     try {
        const result=await bookingService.updateBooking(req.body,req.params.id as string)
        res.status(200).send({
            success:true,
            message:'booking Record is updated',
            data:result.rows[0]
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'There was an error,Booking Data could not updated...'
        })
    }
}
const deleteBooking=async(req:Request,res:Response)=>{
    const id=req.params.id
     try {
        const result=await bookingService.deleteBooking(id as string)
        res.status(200).send({
            success:true,
            message:'Booking Record is deleted',
            
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'There was an error,Booking Record could not deleted...'
        })
    }
}

export const bookingControler={
    createBooking,
    getBookings,
    getSingleBooking,
    updateBooking,
    deleteBooking

}