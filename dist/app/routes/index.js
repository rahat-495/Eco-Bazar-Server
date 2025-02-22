"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_routes_1 = require("../modules/users/users.routes");
const auth_routes_1 = require("../modules/auth/auth.routes");
const items_routes_1 = require("../modules/items/items.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/users",
        route: users_routes_1.userRoutes
    },
    {
        path: "/auth",
        route: auth_routes_1.authRoutes
    },
    {
        path: "/items",
        route: items_routes_1.itemRoutes
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
