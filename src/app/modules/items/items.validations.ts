
import { z } from "zod";

const createItemValidationSchema = z.object({
    body : z.object({
    title : z.string() ,
    price : z.string() ,
    rating : z.string() ,
    quantity : z.string() ,
    image : z.string() ,
    description : z.string() ,
    })
})

const updateItemValidationSchema = z.object({
    body : z.object({
    title : z.string().optional() ,
    price : z.string().optional() ,
    rating : z.string().optional() ,
    quantity : z.string().optional() ,
    image : z.string().optional() ,
    description : z.string().optional() ,
    })
})

export const itemValidationSchema = {
    createItemValidationSchema ,
    updateItemValidationSchema ,
}
