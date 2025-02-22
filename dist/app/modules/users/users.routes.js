"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../middlewares/auth"));
const users_controllers_1 = require("./users.controllers");
const router = (0, express_1.Router)();
router.get('/get-my-data', (0, auth_1.default)("admin", "user"), users_controllers_1.userControllers.getMyData);
exports.userRoutes = router;
