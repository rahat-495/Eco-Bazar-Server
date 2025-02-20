
import express, { Request, Response } from "express" ;
import cors from "cors" ;
import cookieParser from "cookie-parser" ;
import router from "./app/routes";

const app = express() ;

app.use(express.json()) ;
app.use(cors({origin : ['http://localhost:3000/'] , credentials : true})) ;
app.use(cookieParser()) ;

app.use("/api/v1" , router) ;

app.get('/' , (req : Request , res : Response) => {
    res.json({success : true , data : { message : "The server is running !" }})
})

export default app ;
