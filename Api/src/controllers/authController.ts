import { Request, Response } from "express";
import user, { iUser } from "../models/user";
import jwt from 'jsonwebtoken'

const Joi = require('@hapi/joi')

const validateinput = Joi.object({
  email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required()
})


//login user
export const login = async (req: Request, res: Response) => {

try {
  const loginuser = await user.findOne({ "email": req.body.email })
  if (!loginuser) return res.status(400).json('your credentials are not valid')

  const correctPassword = await loginuser.validatePassword(req.body.password);
  if (!correctPassword) return res.status(400).json('Invalid Password');

  const token: string = jwt.sign({ _id: loginuser._id }, process.env['SECRET_TOKEN'] || 'tokenindefinido');
  
  
  res.header('auth-token', token).json(loginuser);
  
} catch (error) {
  res.status(404).json('error')
}


};

//register user
export const register = async (req: Request, res: Response) => {

  const {error} = validateinput.validate(req.body)
  if (error) {
    return res.status(400).json(
        {error: error.details[0].message}
    )
}


  const User: iUser = new user({
    email: req.body.email,
    password: req.body.password

  })
  User.password = await User.encryptPassword(User.password);
  const saveData = await User.save();

  //crear token
  const token: string = jwt.sign({ _id: saveData._id }, process.env.SECRET_TOKEN || 'tokenindefinido')

  res.header('token', token).json(saveData)
};


