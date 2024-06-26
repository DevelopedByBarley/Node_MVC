"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const authenticateToken_1 = require("../middlewares/authenticateToken");
const router = (0, express_1.Router)();
exports.userRouter = router;
router.get('/', authenticateToken_1.authenticateToken, user_controller_1.all);
router.post('/register', user_controller_1.store);
router.post('/login', user_controller_1.login);
router.delete('/:id', user_controller_1.destroy);
router.get('/:id', user_controller_1.index);
