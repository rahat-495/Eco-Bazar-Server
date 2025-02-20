
import { RequestHandler } from "express";

const notFound : RequestHandler = (req , res , next) : any => {
    return res.status(404).json({
        success : false ,
        message : "API Not Found !" ,
        error : "" ,
    })
}

export default notFound ;
