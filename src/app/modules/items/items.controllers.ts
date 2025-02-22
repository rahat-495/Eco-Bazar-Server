
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import { itemServices } from "./items.services"

const getAllItems = catchAsync(async (req , res , next) => {
    const result = await itemServices.getAllItemsFromDb() ;
    if(result){
        sendResponse(res , { data : result , statusCode : 200 , success : true , message : "All items are retrived !" })
    }
})

const getSingleItem = catchAsync(async (req , res , next) => {
    const result = await itemServices.getSingleItemFromDb(req.params.id) ;
    if(result){
        sendResponse(res , { data : result , statusCode : 200 , success : true , message : "Item are retrived !" })
    }
})

const createItem = catchAsync(async (req , res , next) => {
    const result = await itemServices.createItemIntoDb(req.body) ;
    if(result){
        sendResponse(res , { data : result , statusCode : 200 , success : true , message : "Items are created successfully !" })
    }
})

const updateItem = catchAsync(async (req , res , next) => {
    const result = await itemServices.updateItemFromDb(req.params.id , req.body) ;
    if(result){
        sendResponse(res , { data : result , statusCode : 200 , success : true , message : "Item are update successfully !" })
    }
})

const deleteItem = catchAsync(async (req , res , next) => {
    const result = await itemServices.deleteItemIntoDb(req.params.id) ;
    if(result){
        sendResponse(res , { data : result , statusCode : 200 , success : true , message : "Item are deleted successfully !" })
    }
})

export const itemControllers = {
    createItem ,
    deleteItem ,
    updateItem ,
    getAllItems ,
    getSingleItem ,
}
