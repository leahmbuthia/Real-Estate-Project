import express from 'express'
import { UserAuthentication } from '../controllers/auth.controller.js';
 const authRouter = express.Router();

 authRouter.post('/auth', UserAuthentication);


 export default authRouter;