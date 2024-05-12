import express from 'express'
import { UserAuthentication, Signin } from '../controllers/auth.controller.js';
 const authRouter = express.Router();

 authRouter.post('/signup', UserAuthentication);
 authRouter.post('/signin', Signin);


 export default authRouter;