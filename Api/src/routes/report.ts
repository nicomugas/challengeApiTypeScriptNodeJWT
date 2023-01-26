import { Router } from "express";
import {alluser, searchuser} from '../controllers/reportController'
const router : Router = Router();


router.get ('/allusers', alluser );
router.get ('/search', searchuser );
export default router;