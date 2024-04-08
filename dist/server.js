"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const connect_1 = require("./db/connect");
const welcome_routes_1 = require("./routes/welcome.routes");
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use('/', welcome_routes_1.welcomeRouter);
(0, connect_1.connect)();
app.listen(port, () => console.log(`App is listening on port ${port}`));
