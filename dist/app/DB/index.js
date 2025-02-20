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
const config_1 = __importDefault(require("../config"));
const users_model_1 = require("../modules/users/users.model");
const admin = {
    name: "Kazi Rihatul Islam Rahat",
    email: "kazirihatul@gmail.com",
    phone: "01957564628",
    password: config_1.default.adminPassword,
    role: "admin",
};
const seedAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    const isSuperAdminAxist = yield users_model_1.usersModel.findOne({ role: 'admin' });
    if (!isSuperAdminAxist) {
        yield users_model_1.usersModel.create(admin);
    }
});
exports.default = seedAdmin;
