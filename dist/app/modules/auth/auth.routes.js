"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const auth_controllers_1 = require("./auth.controllers");
const auth_1 = __importDefault(require("../middlewares/auth"));
const router = (0, express_1.Router)();
router.post('/register-user', auth_controllers_1.authControllers.registerUser);
router.post('/login-user', auth_controllers_1.authControllers.loginUser);
router.post('/logOut', (0, auth_1.default)("admin", "user"), auth_controllers_1.authControllers.logOut);
exports.authRoutes = router;
