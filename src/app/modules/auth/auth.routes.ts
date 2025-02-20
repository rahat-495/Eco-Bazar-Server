
import { Router } from "express";
import { authControllers } from "./auth.controllers";

const router = Router() ;

router.post('/register-user' , authControllers.registerUser) ;
router.post('/login-user' , authControllers.loginUser) ;

export const authRoutes = router ;
