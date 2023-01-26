import { Router } from "express";
import {register, login} from '../controllers/authController'
const router : Router = Router();



router.post ('/login', login );
router.post ('/register', register );

export default router;