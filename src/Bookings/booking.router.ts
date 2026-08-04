import { Router } from "express";
import { bookingControler } from "./booking.controler";
import auth from "../auth/auth";
const bookingRouter=Router()
bookingRouter.post('/',bookingControler.createBooking)
bookingRouter.get('/',auth('admin'),bookingControler.getBookings)
bookingRouter.get('/:id',auth('admin','customer'),bookingControler.getSingleBooking)
bookingRouter.put('/:id',auth('admin','customer'),bookingControler.updateBooking1)
bookingRouter.put('/returned/:id',auth('admin'),bookingControler.updateBooking2)
bookingRouter.delete('/:id',auth('admin'),bookingControler.deleteBooking)

export default bookingRouter;