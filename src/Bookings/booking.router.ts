import { Router } from "express";
import { bookingControler } from "./booking.controler";
const bookingRouter=Router()
bookingRouter.post('/',bookingControler.createBooking)
bookingRouter.get('/',bookingControler.getBookings)
bookingRouter.get('/:id',bookingControler.getSingleBooking)
bookingRouter.put('/:id',bookingControler.updateBooking)
bookingRouter.delete('/:id',bookingControler.deleteBooking)

export default bookingRouter;