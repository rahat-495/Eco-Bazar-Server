
import { Router } from "express";
import { authControllers } from "./auth.controllers";
import auth from "../middlewares/auth";

const router = Router() ;

router.post('/register-user' , authControllers.registerUser) ;
router.post('/login-user' , authControllers.loginUser) ;
router.post('/logOut' , auth("admin" , "user") , authControllers.logOut) ;

export const authRoutes = router ;
