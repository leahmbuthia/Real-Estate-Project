import express from 'express'
import { UserAuthentication, Signin, google, signOut } from '../controllers/auth.controller.js';
 const authRouter = express.Router();

 authRouter.post('/signup', UserAuthentication);
 authRouter.post('/signin', Signin);
 authRouter.post('/google', google);
 authRouter.get('/signout', signOut);

 export default authRouter;