"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//const dbUri = `mongodb+srv://api_challenge_cxa:EcqVPVAlQEvxOA6u@cluster0.rapx6jc.mongodb.net/users?retryWrites=true&w=majority`;
const dbUri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.rapx6jc.mongodb.net/users?retryWrites=true&w=majority`;
mongoose_1.default.set('strictQuery', false);
mongoose_1.default.connect(dbUri)
    .then(() => console.log('connect to mongodb'))
    .catch(e => console.log('error connect to mongodb', e));
