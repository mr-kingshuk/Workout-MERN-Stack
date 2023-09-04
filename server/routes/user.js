import express  from "express";

import loginUser from "../controllers/UserController/loginUser.js";
import signupUser from "../controllers/UserController/signupUser.js";

const router = express.Router();

//login route
router.post('/login', loginUser);

//signup route
router.post('/signup', signupUser);

export default router;