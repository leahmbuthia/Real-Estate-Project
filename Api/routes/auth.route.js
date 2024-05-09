import express from 'express'
import { UserAuthentication } from '../controllers/auth.controller.js';
 const authRouter = express.Router();

 authRouter.post('/signup', UserAuthentication);


 export default authRouter;