
import { RequestHandler } from "express"
import catchAsync from "../../utils/catchAsync"
import { authServices } from "./auth.services"
import sendResponse from "../../utils/sendResponse";
import config from "../../config";

const registerUser : RequestHandler = catchAsync(async (req , res , next) => {
    const result = await authServices.createUserIntoDb(req.body) ;
    res.cookie("token" , result?.token , { secure : config.nodeEnv === "production" , httpOnly : true , sameSite : "strict" , maxAge: 1000 * 60 * 60 * 24 * 10})
    if(result){
        sendResponse(res , { data : result , statusCode : 200 , success : true , message : "Register user success full !" })
    }
})

const loginUser : RequestHandler = catchAsync(async (req , res , next) => {
    const result = await authServices.loginUser(req.body) ;
    res.cookie("token" , result?.token , { secure : config.nodeEnv === "production" , httpOnly : true , sameSite : "strict" , maxAge: 1000 * 60 * 60 * 24 * 10})
    if(result){
        sendResponse(res , { data : result , statusCode : 200 , success : true , message : "User login success full !" })
    }
})

const logOut : RequestHandler = catchAsync(async (req , res , next) => {
    // res.cookie("token" , "" , { secure : config.nodeEnv === "production" , httpOnly : true , sameSite : "strict" , maxAge: 1000 * 60 * 60 * 24 * 10})
    sendResponse(res , { data : {} , statusCode : 200 , success : true , message : "User logout successfull !" }) ;
})

export const authControllers = {
    logOut ,
    loginUser ,
    registerUser ,
}
