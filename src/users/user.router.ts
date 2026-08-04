import { Router } from "express";
import { userControler } from "./user.controler";
import auth from "../auth/auth";

const userRouter=Router()
userRouter.post('/',userControler.createUser)
userRouter.get('/',auth('admin'),userControler.getUser)
userRouter.get('/:id',auth('admin'),userControler.getSingleUser)
userRouter.put('/:id',auth('admin','customer'),userControler.updateUser)
userRouter.delete('/:id',auth('admin'),userControler.deleteUser)

export default userRouter;