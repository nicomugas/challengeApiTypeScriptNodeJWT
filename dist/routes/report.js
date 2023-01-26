"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportController_1 = require("../controllers/reportController");
const router = (0, express_1.Router)();
router.get('/allusers', reportController_1.alluser);
router.get('/search', reportController_1.searchuser);
exports.default = router;
