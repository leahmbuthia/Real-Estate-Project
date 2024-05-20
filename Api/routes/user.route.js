import express from 'express'
import { getUser, updateUser,deleteUser, getUserListings} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const userRouter = express.Router();
userRouter.get('/users', getUser);
userRouter.post('/update/:id', verifyToken, updateUser);
userRouter.delete('/delete/:id', verifyToken, deleteUser);
userRouter.get('/listing/:id', verifyToken, getUserListings);
userRouter.get('/:id', verifyToken, getUser);
 export default userRouter;


