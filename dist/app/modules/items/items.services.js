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
exports.itemServices = void 0;
const AppErrors_1 = __importDefault(require("../../errors/AppErrors"));
const items_model_1 = require("./items.model");
const getAllItemsFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield items_model_1.itemsModel.find();
    return result;
});
const getSingleItemFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield items_model_1.itemsModel.findById(id);
    return result;
});
const createItemIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield items_model_1.itemsModel.create(payload);
    return result;
});
const updateItemFromDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isItemAxist = yield items_model_1.itemsModel.findById(id);
    if (!isItemAxist) {
        throw new AppErrors_1.default(404, "Item not found !");
    }
    const result = yield items_model_1.itemsModel.findByIdAndUpdate(id, payload);
    return result;
});
const deleteItemIntoDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isItemAxist = yield items_model_1.itemsModel.findById(id);
    if (!isItemAxist) {
        throw new AppErrors_1.default(404, "Item not found !");
    }
    const result = yield items_model_1.itemsModel.findByIdAndDelete(id);
    return result;
});
exports.itemServices = {
    createItemIntoDb,
    updateItemFromDb,
    deleteItemIntoDb,
    getAllItemsFromDb,
    getSingleItemFromDb,
};
