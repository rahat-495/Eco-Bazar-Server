
import { z } from "zod";

const createItemValidationSchema = z.object({
    body : z.object({
    title : z.string() ,
    price : z.number() ,
    rating : z.number() ,
    quantity : z.number() ,
    image : z.string() ,
    })
})

export const itemValidationSchema = {
    createItemValidationSchema ,
}
