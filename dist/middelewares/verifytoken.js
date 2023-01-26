"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token');
    console.log(process.env.SECRET_TOKEN);
    if (!token)
        return res.status(401).json({ error: 'Access denied' });
    try {
        const verified = jwt.verify(token, process.env.SECRET_TOKEN || 'tokenindefinido');
        //req.user = verified
        next();
    }
    catch (error) {
        res.status(400).json({ error: 'token is no valid' });
    }
};
// import { Request, Response, NextFunction } from 'express'
// import jwt from 'jsonwebtoken'
// export interface IPayload {
//     _id: string;
//     iat: number;
// } 
//  const verifyToken = (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const token = req.header('auth-token');
//         console.log(process.env.SECRET_TOKEN)
//         if (!token) return res.status(401).json('Access Denied');
//         const payload = jwt.verify(token, process.env['SECRET_TOKEN'] || 'tokenindefinido') as IPayload;
//         //req.userId = payload._id;
//         console.log(payload);
//         next();
//     } catch (e) {
//         res.status(400).send('token is no valid');
//     }
// }
module.exports = verifyToken;
