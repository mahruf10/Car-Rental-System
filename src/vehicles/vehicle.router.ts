import { Router } from "express";
import { vehicleControler } from "./vehicle.controler";

const vehicleRouter=Router()
vehicleRouter.post('/',vehicleControler.createVehicle)
vehicleRouter.get('/',vehicleControler.getVehicle)
vehicleRouter.get('/:id',vehicleControler.getSingleVehicle)
vehicleRouter.put('/:id',vehicleControler.updateVehicle)
vehicleRouter.delete('/:id',vehicleControler.deleteVehicle)

export default vehicleRouter;