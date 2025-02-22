
import { Router } from "express";
import auth from "../middlewares/auth";
import { userControllers } from "./users.controllers";

const router = Router() ;

router.get('/get-my-data' , auth("admin" , "user") , userControllers.getMyData)

export const userRoutes = router ;
