
import config from "../../config";
import AppError from "../../errors/AppErrors";
import { TUser } from "../users/users.interfaces"
import { usersModel } from "../users/users.model"
import httpStatus from 'http-status'
import jwt from 'jsonwebtoken' ;
import bcrypt from 'bcrypt' ;

const createUserIntoDb = async (payload : TUser) => {
    const isUserAlreadyAxist = await usersModel.findOne({ $or : [{email : payload?.email} , {phone : payload?.phone}] }) ;
    if(isUserAlreadyAxist){
        throw new AppError(httpStatus.ALREADY_REPORTED , "User already register !") ;
    }
    const result = await usersModel.create(payload) ;
    const tokenPayload = { email : result?.email , phone : result?.phone , role : result?.role } ;
    const token = jwt.sign(tokenPayload , config.accessSecret as string , {expiresIn : "10d"}) ;
    return {token} ;
}

const loginUser = async (payload : Partial<TUser>) => {
    const isUserAlreadyAxist = await usersModel.findOne({email : payload?.email , phone : payload?.phone}).select("+password") ;
    if(!isUserAlreadyAxist){
        throw new AppError(httpStatus.NOT_FOUND , "User not found") ;
    }
    const isPasswordMatch = await bcrypt.compare(payload?.password as string , isUserAlreadyAxist?.password)
    if(!isPasswordMatch){
        throw new AppError(httpStatus.FORBIDDEN , "Password is not match !") ;
    }
    const tokenPayload = { email : isUserAlreadyAxist?.email , phone : isUserAlreadyAxist?.phone , role : isUserAlreadyAxist?.role } ;
    const token = jwt.sign(tokenPayload , config.accessSecret as string , {expiresIn : "10d"}) ;
    return {token} ;
}

export const authServices = {
    loginUser ,
    createUserIntoDb ,
}
