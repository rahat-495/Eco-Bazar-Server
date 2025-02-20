
import express, { Request, Response } from "express" ;
import cors from "cors" ;
import cookieParser from "cookie-parser" ;
import router from "./app/routes";
import globalErrorHandler from "./app/modules/middlewares/globalErrorHandler";
import notFound from "./app/modules/middlewares/notFound";

const app = express() ;

app.use(express.json()) ;
app.use(cors({origin : ['http://localhost:3000/'] , credentials : true})) ;
app.use(cookieParser()) ;

app.use("/api/v1" , router) ;

app.get('/' , (req : Request , res : Response) => {
    res.json({success : true , data : { message : "The server is running !" }})
})

app.use(globalErrorHandler) ;
app.use(notFound) ;

export default app ;
