import { errorHandler } from "./error";

export const verifyToken =(req,res,next) =>{
    const token = req.cookies.access_token;

    if (!token) return next(errorHandler(401, 'Not Authorized'));
    jwt.very(token, process.env.JWT_SECRET , (err,user)=>{
        if (err) return next(errorHandler(403, 'Forbidden'));
        req.user =user;
        
    })
}