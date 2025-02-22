"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemValidationSchema = void 0;
const zod_1 = require("zod");
const createItemValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        price: zod_1.z.string(),
        rating: zod_1.z.string(),
        quantity: zod_1.z.string(),
        image: zod_1.z.string(),
        description: zod_1.z.string(),
    })
});
exports.itemValidationSchema = {
    createItemValidationSchema,
};
