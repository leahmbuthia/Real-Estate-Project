import express from 'express';
import mongoose from 'mongoose';


import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();
// URL encode the password


// Use the encoded password in the connection URI
mongoose.connect(process.env.MONGO).then(() =>{
    console.log('connected to MongoDB');
}).catch((err) => {
    console.log(err);
});
const app = express();
app.use(express.json())


app.use('/api', userRouter);
app.use('/api', authRouter);

app.listen(3000, () => {
    console.log(`Server running on port http://localhost:3000`);
});

