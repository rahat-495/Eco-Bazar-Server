"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsModel = void 0;
const mongoose_1 = require("mongoose");
const itemSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: "In Stock",
        enum: ["In Stock", "Out of Stock"],
    },
}, {
    timestamps: true
});
exports.itemsModel = (0, mongoose_1.model)("item", itemSchema);
