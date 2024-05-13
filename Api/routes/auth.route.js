import express from 'express'
import { UserAuthentication, Signin, google } from '../controllers/auth.controller.js';
 const authRouter = express.Router();

 authRouter.post('/signup', UserAuthentication);
 authRouter.post('/signin', Signin);
 authRouter.post('/google', google);


 export default authRouter;