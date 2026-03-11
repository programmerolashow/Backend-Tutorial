import { Router } from "express";
import { logoutUser, loginUser, registerUser } from '../Controllers/user.controller.js';

const router = Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(logoutUser);

export default router;