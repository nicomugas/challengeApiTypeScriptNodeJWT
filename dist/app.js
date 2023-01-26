"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
const report_1 = __importDefault(require("./routes/report"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
//middelewares
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
const validatetoken = require('./middelewares/verifytoken');
//routes
app.use('/auth', auth_1.default);
app.use('/report', validatetoken, report_1.default);
exports.default = app;
