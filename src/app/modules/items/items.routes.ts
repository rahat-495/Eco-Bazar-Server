
import { Router } from "express";
import { itemControllers } from "./items.controllers";
import auth from "../middlewares/auth";
import validateRequest from "../middlewares/validateRequest";
import { itemValidationSchema } from "./items.validations";

const router = Router() ;

router.get('/' , itemControllers.getAllItems) ;
router.get('/:id' , itemControllers.getSingleItem) ;
router.post('/create-item' , auth("admin") , validateRequest(itemValidationSchema.createItemValidationSchema) , itemControllers.createItem)
router.patch('/update-item/:id' , auth("admin") , validateRequest(itemValidationSchema.updateItemValidationSchema) , itemControllers.updateItem)
router.delete('/:id' , auth("admin") , itemControllers.deleteItem)

export const itemRoutes = router ;
