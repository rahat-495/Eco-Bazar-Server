
import { Router } from "express"
import { userRoutes } from "../modules/users/users.routes";
import { authRoutes } from "../modules/auth/auth.routes";
import { itemRoutes } from "../modules/items/items.routes";

const router = Router() ;

const moduleRoutes = [
    {
        path : "/users",
        route : userRoutes
    },
    {
        path : "/auth",
        route : authRoutes
    },
    {
        path : "/items",
        route : itemRoutes
    },
]

moduleRoutes.forEach((route) => router.use(route.path , route.route)) ;

export default router ;
