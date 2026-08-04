import { Router } from "express";
import loginUser from "./auth.controler";

const authRouter=Router()
authRouter.post('/login',loginUser)
export default authRouter