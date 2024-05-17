import express from 'express'
import { getUser, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const userRouter = express.Router();
userRouter.get('/users', getUser);
userRouter.post('/update/:id', verifyToken, updateUser);

 export default userRouter;


