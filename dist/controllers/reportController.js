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
exports.searchuser = exports.alluser = void 0;
const user_1 = __importDefault(require("../models/user"));
const alluser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let pageSize = 2; // cantidad de registros por pagina. 
    let page = req.query.page || 1; //recibo la pagina que quiero mostrar. 
    try {
        const count = user_1.default.count();
        const pages = Math.ceil(Number(count) / pageSize);
        const allusers = yield user_1.default.find({})
            .skip((pageSize * Number(page)) - pageSize)
            .limit(pageSize)
            .exec((err, users) => {
            if (err)
                return err;
            res.send({
                users,
                current: page,
                pages: pages // retorno cantidad de paginas. 
            });
        });
    }
    catch (err) {
        throw err;
    }
});
exports.alluser = alluser;
const searchuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mail = req.query.mail;
    const finduser = yield user_1.default.findOne({ "email": mail });
    if (!finduser)
        return res.status(400).json('user not found');
    res.send(finduser);
});
exports.searchuser = searchuser;
