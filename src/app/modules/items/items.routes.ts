
import { Router } from "express";
import { itemControllers } from "./items.controllers";
import auth from "../middlewares/auth";
import validateRequest from "../middlewares/validateRequest";
import { itemValidationSchema } from "./items.validations";

const router = Router() ;

router.get('/' , itemControllers.getAllItems) ;
router.post('/create-item' , auth("admin") , validateRequest(itemValidationSchema.createItemValidationSchema) , itemControllers.createItem)

export const itemRoutes = router ;
