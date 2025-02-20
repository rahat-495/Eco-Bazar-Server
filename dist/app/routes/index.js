"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_routes_1 = require("../modules/users/users.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/users",
        route: users_routes_1.userRoutes
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
