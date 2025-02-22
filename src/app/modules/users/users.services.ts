
import { JwtPayload } from "jsonwebtoken";
import { TUser } from "./users.interfaces"
import { usersModel } from "./users.model";

const getUserDataFromDb = async (payload : JwtPayload) => {
    const {email , phone , role} = payload ;
    const result = await usersModel.findOne({email , phone , role}) ;
    return result ;
}

export const userServices = {
    getUserDataFromDb ,
}
