
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

export const itemValidationSchema = {
    createItemValidationSchema ,
}
