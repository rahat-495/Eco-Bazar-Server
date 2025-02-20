
import { RequestHandler } from "express"
import catchAsync from "../../utils/catchAsync"
import { authServices } from "./auth.services"
import sendResponse from "../../utils/sendResponse";

const registerUser : RequestHandler = catchAsync(async (req , res , next) => {
    const result = await authServices.createUserIntoDb(req.body) ;
    if(result){
        sendResponse(res , { data : result , statusCode : 200 , success : true , message : "Register user success full !" })
    }
})

const loginUser : RequestHandler = catchAsync(async (req , res , next) => {
    const result = await authServices.loginUser(req.body) ;
    if(result){
        sendResponse(res , { data : result , statusCode : 200 , success : true , message : "User login success full !" })
    }
})

export const authControllers = {
    loginUser ,
    registerUser ,
}
