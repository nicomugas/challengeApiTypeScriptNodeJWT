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
exports.register = exports.login = void 0;
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Joi = require('@hapi/joi');
const validateinput = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
});
//login user
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loginuser = yield user_1.default.findOne({ "email": req.body.email });
    if (!loginuser)
        return res.status(400).json('your credentials are not valid');
    const correctPassword = yield loginuser.validatePassword(req.body.password);
    if (!correctPassword)
        return res.status(400).json('Invalid Password');
    const token = jsonwebtoken_1.default.sign({ _id: loginuser._id }, process.env['SECRET_TOKEN'] || 'tokenindefinido');
    res.header('auth-token', token).json(loginuser);
});
exports.login = login;
//register user
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = validateinput.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    const User = new user_1.default({
        email: req.body.email,
        password: req.body.password
    });
    User.password = yield User.encryptPassword(User.password);
    const saveData = yield User.save();
    //crear token
    const token = jsonwebtoken_1.default.sign({ _id: saveData._id }, process.env.SECRET_TOKEN || 'tokenindefinido');
    res.header('token', token).json(saveData);
});
exports.register = register;
