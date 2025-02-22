
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import { itemServices } from "./items.services"

const getAllItems = catchAsync(async (req , res , next) => {
    const result = await itemServices.getAllItemsFromDb() ;
    if(result){
        sendResponse(res , { data : result , statusCode : 200 , success : true , message : "All items are retrived !" })
    }
})

const createItem = catchAsync(async (req , res , next) => {
    const result = await itemServices.createItemIntoDb(req.body) ;
    if(result){
        sendResponse(res , { data : result , statusCode : 200 , success : true , message : "Items are created successfully !" })
    }
})

export const itemControllers = {
    createItem ,
    getAllItems ,
}
