
import dotenv from "dotenv" ;
import path from "path" ;

dotenv.config({path : path.join(process.cwd() , ".env")}) ;

export default {
    port : process.env.PORT,
    databaseUrl : process.env.DATABASE_URL,
    bcryptSaltRounds : process.env.BCRYPT_SALT_ROUNDS,
    nodeEnv : process.env.NODE_ENV,
    accessSecret : process.env.ACCESS_SECRET,
    adminPassword : process.env.ADMIN_PASSWORD,
}
