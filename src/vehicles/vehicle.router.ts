import { Router } from "express";
import { vehicleControler } from "./vehicle.controler";
import auth from "../auth/auth";

const vehicleRouter=Router()
vehicleRouter.post('/',auth('admin'),vehicleControler.createVehicle)
vehicleRouter.get('/',vehicleControler.getVehicle)
vehicleRouter.get('/:id',vehicleControler.getSingleVehicle)
vehicleRouter.put('/:id',auth('admin'),vehicleControler.updateVehicle)
vehicleRouter.delete('/:id',auth('admin'),vehicleControler.deleteVehicle)

export default vehicleRouter;