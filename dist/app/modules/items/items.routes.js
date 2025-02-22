"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemRoutes = void 0;
const express_1 = require("express");
const items_controllers_1 = require("./items.controllers");
const auth_1 = __importDefault(require("../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../middlewares/validateRequest"));
const items_validations_1 = require("./items.validations");
const router = (0, express_1.Router)();
router.get('/', items_controllers_1.itemControllers.getAllItems);
router.get('/:id', items_controllers_1.itemControllers.getSingleItem);
router.post('/create-item', (0, auth_1.default)("admin"), (0, validateRequest_1.default)(items_validations_1.itemValidationSchema.createItemValidationSchema), items_controllers_1.itemControllers.createItem);
exports.itemRoutes = router;
