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
exports.itemControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const items_services_1 = require("./items.services");
const getAllItems = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield items_services_1.itemServices.getAllItemsFromDb();
    if (result) {
        (0, sendResponse_1.default)(res, { data: result, statusCode: 200, success: true, message: "All items are retrived !" });
    }
}));
const getSingleItem = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield items_services_1.itemServices.getSingleItemFromDb(req.params.id);
    if (result) {
        (0, sendResponse_1.default)(res, { data: result, statusCode: 200, success: true, message: "Item are retrived !" });
    }
}));
const createItem = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield items_services_1.itemServices.createItemIntoDb(req.body);
    if (result) {
        (0, sendResponse_1.default)(res, { data: result, statusCode: 200, success: true, message: "Items are created successfully !" });
    }
}));
const updateItem = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield items_services_1.itemServices.updateItemFromDb(req.params.id, req.body);
    if (result) {
        (0, sendResponse_1.default)(res, { data: result, statusCode: 200, success: true, message: "Item are update successfully !" });
    }
}));
const deleteItem = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield items_services_1.itemServices.deleteItemIntoDb(req.params.id);
    if (result) {
        (0, sendResponse_1.default)(res, { data: result, statusCode: 200, success: true, message: "Item are deleted successfully !" });
    }
}));
exports.itemControllers = {
    createItem,
    deleteItem,
    updateItem,
    getAllItems,
    getSingleItem,
};
