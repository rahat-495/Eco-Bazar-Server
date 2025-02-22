"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppErrors_1 = __importDefault(require("../../errors/AppErrors"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_status_1 = __importDefault(require("http-status"));
const users_model_1 = require("../users/users.model");
const config_1 = __importDefault(require("../../config"));
const auth = (...requiredRoles) => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        console.log(token);
        if (!token) {
            throw new AppErrors_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized !");
        }
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.accessSecret);
        const role = decoded.role;
        const user = yield users_model_1.usersModel.findOne({ email: decoded === null || decoded === void 0 ? void 0 : decoded.email, phone: decoded === null || decoded === void 0 ? void 0 : decoded.phone, role });
        if (!user) {
            throw new AppErrors_1.default(404, "The user is not found !");
        }
        if (requiredRoles && !requiredRoles.includes(role)) {
            throw new AppErrors_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized !");
        }
        req.user = decoded;
        next();
    }));
};
exports.default = auth;
