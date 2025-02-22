
import { model, Schema } from "mongoose";
import { TItem } from "./items.interface";

const itemSchema = new Schema<TItem>({
    title : {
        type : String ,
        required : true 
    },
    image : {
        type : String ,
        required : true 
    },
    price : {
        type : Number ,
        required : true  
    },
    quantity : {
        type : Number ,
        required : true  
    },
    rating : {
        type : Number ,
        required : true  
    },
    status : {
        type : String ,
        default : "In Stock" ,
        enum : ["In Stock" , "Out of Stock"] ,
    },
},{
    timestamps : true
})

export const itemsModel = model<TItem>("item" , itemSchema) ;
