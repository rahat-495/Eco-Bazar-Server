
import { model, Schema } from "mongoose";
import { TUser } from "./users.interfaces";
import bcrypt from 'bcrypt' ;
import config from "../../config";

const userSchema = new Schema<TUser>({
    name : {
        type : String ,
        required : true ,
    },
    email : {
        type : String ,
        unique : true ,
        required : true ,
    },
    password : {
        type : String ,
        required : true ,
        select : 0 ,
    },
    phone : {
        type : String ,
        required : true ,
        unique : true ,
    },
    role : {
        type : String ,
        default : "user"
    },
} , {
    timestamps : true ,
})

userSchema.pre("save" , async function(next){
    const user = this ;
    user.password = await bcrypt.hash(user?.password , Number(config.bcryptSaltRounds)) ;
    next() ;
})

userSchema.post("save" , function(doc , next){
    doc.password = "" ;
    next() ;
})

export const usersModel = model<TUser>("user" , userSchema) ;
