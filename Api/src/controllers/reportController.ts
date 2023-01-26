import { Request, Response } from "express";
import user, { iUser } from "../models/user";
import jwt from 'jsonwebtoken'

export const alluser = async (req: Request, res: Response) => {
 
  let pageSize = 2 // cantidad de registros por pagina. 
  let page = req.query.page || 1  //recibo la pagina que quiero mostrar. 
 
  try {
    const count =  user.count();
    const pages = Math.ceil(Number(count)/ pageSize)
    const allusers = await user.find({ })
    .skip((pageSize * Number(page))-pageSize)
    .limit(pageSize)
    .exec((err, users) =>{

      if (err) return err;
      res.send({
        users, //retorno data
        current: page, //retorno  pagina que debo mostrar
        pages: pages // retorno cantidad de paginas. 
      })
    }
     )
   
  } catch (err) {
    throw err;
  }

};


export const searchuser = async (req: Request, res: Response) => {

  const mail = req.query.mail

  const finduser = await user.findOne({ "email": mail })
  if (!finduser) return res.status(400).json('user not found')



  res.send(finduser)
}