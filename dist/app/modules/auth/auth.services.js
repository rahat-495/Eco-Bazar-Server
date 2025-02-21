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
exports.authServices = void 0;
const config_1 = __importDefault(require("../../config"));
const AppErrors_1 = __importDefault(require("../../errors/AppErrors"));
const users_model_1 = require("../users/users.model");
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUserIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserAlreadyAxist = yield users_model_1.usersModel.findOne({ $or: [{ email: payload === null || payload === void 0 ? void 0 : payload.email }, { phone: payload === null || payload === void 0 ? void 0 : payload.phone }] });
    if (isUserAlreadyAxist) {
        throw new AppErrors_1.default(http_status_1.default.ALREADY_REPORTED, "User already register !");
    }
    const result = yield users_model_1.usersModel.create(payload);
    const tokenPayload = { email: result === null || result === void 0 ? void 0 : result.email, phone: result === null || result === void 0 ? void 0 : result.phone, role: result === null || result === void 0 ? void 0 : result.role };
    const token = jsonwebtoken_1.default.sign(tokenPayload, config_1.default.accessSecret, { expiresIn: "10d" });
    return { userData: result, token };
});
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserAlreadyAxist = yield users_model_1.usersModel.findOne({ email: payload === null || payload === void 0 ? void 0 : payload.email, phone: payload === null || payload === void 0 ? void 0 : payload.phone }).select("+password");
    if (!isUserAlreadyAxist) {
        throw new AppErrors_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    const isPasswordMatch = yield bcrypt_1.default.compare(payload === null || payload === void 0 ? void 0 : payload.password, isUserAlreadyAxist === null || isUserAlreadyAxist === void 0 ? void 0 : isUserAlreadyAxist.password);
    if (!isPasswordMatch) {
        throw new AppErrors_1.default(http_status_1.default.FORBIDDEN, "Password is not match !");
    }
    const tokenPayload = { email: isUserAlreadyAxist === null || isUserAlreadyAxist === void 0 ? void 0 : isUserAlreadyAxist.email, phone: isUserAlreadyAxist === null || isUserAlreadyAxist === void 0 ? void 0 : isUserAlreadyAxist.phone, role: isUserAlreadyAxist === null || isUserAlreadyAxist === void 0 ? void 0 : isUserAlreadyAxist.role };
    const token = jsonwebtoken_1.default.sign(tokenPayload, config_1.default.accessSecret, { expiresIn: "10d" });
    isUserAlreadyAxist.password = "";
    return { userData: isUserAlreadyAxist, token };
});
exports.authServices = {
    loginUser,
    createUserIntoDb,
};
