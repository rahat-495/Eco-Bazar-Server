
import AppError from "../../errors/AppErrors";
import catchAsync from "../../utils/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import httpStatus from "http-status";
import { usersModel } from "../users/users.model";
import config from "../../config";

type TUserRole = "user" | "admin" ;

const auth = async (...requiredRoles : TUserRole[]) => {
    return catchAsync(async (req , res , next) => {
        const token = req.headers.authorization ;
        
        if(!token){
            throw new AppError(httpStatus.UNAUTHORIZED , "You are not authorized !") ;
        }
        
        const decoded = jwt.verify(token as string , config.accessSecret as string) as JwtPayload ;
        const role = decoded.role ;

        const user = await usersModel.findOne({email : decoded?.email , phone : decoded?.phone , role}) ;
        
        if(!user){
            throw new AppError(404 , "The user is not found !") ;
        }

        if(requiredRoles && !requiredRoles.includes(role)){
            throw new AppError(httpStatus.UNAUTHORIZED , "You are not authorized !") ;
        }
        
        req.user = decoded as JwtPayload ;

        next() ;
    })
}

export default auth ;
