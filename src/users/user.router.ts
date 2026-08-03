import { Router } from "express";
import { userControler } from "./user.controler";

const userRouter=Router()
userRouter.post('/',userControler.createUser)
userRouter.get('/',userControler.getUser)
userRouter.get('/:id',userControler.getSingleUser)
userRouter.put('/:id',userControler.updateUser)
userRouter.delete('/:id',userControler.deleteUser)

export default userRouter;