
import express, { Request, Response } from "express" ;
import cors from "cors" ;
import cookieParser from "cookie-parser" ;

const app = express() ;

app.use(express.json()) ;
app.use(cors({origin : ['http://localhost:3000/'] , credentials : true})) ;
app.use(cookieParser()) ;

app.get('/' , (req : Request , res : Response) => {
    res.json({success : true , data : { message : "The server is running !" }})
})

export default app ;
