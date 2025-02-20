
import config from "../config";
import { usersModel } from "../modules/users/users.model";

const admin = {
    name : "Kazi Rihatul Islam Rahat" ,
    email : "kazirihatul@gmail.com" ,
    phone : "01957564628" ,
    password : config.adminPassword ,
    role : "admin",
}

const seedAdmin = async () => {
    const isSuperAdminAxist = await usersModel.findOne({role : 'admin'}) ;
    if(!isSuperAdminAxist){
        await usersModel.create(admin) ;
    }
}

export default seedAdmin ;
