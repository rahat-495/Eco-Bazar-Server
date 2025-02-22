
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./users.services";

const getMyData = catchAsync(async (req , res , next) => {
    const result = await userServices.getUserDataFromDb(req.user) ;
    if(result){
        sendResponse(res , { data : result , statusCode : 200 , success : true , message : "User data are retrived !" })
    }
})

export const userControllers = {
    getMyData ,
}
