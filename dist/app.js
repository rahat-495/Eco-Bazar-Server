"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandler_1 = __importDefault(require("./app/modules/middlewares/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/modules/middlewares/notFound"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: ['http://localhost:3000'], credentials: true }));
app.use((0, cookie_parser_1.default)());
app.use("/api/v1", routes_1.default);
app.get('/', (req, res) => {
    res.json({ success: true, data: { message: "The server is running !" } });
});
app.use(globalErrorHandler_1.default);
app.use(notFound_1.default);
exports.default = app;
