import { Router } from "express";
import { login, logout, profile, signup } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

// create router
const userRouter = Router();

// define Routes
userRouter.post('/users/signup', signup );

userRouter.post('/users/login', login);

userRouter.get('/users/profile', isAuthenticated, profile);

userRouter.post('/users/logout', isAuthenticated, logout);

// export router
export default userRouter;