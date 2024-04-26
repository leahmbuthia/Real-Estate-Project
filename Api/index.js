import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();
// URL encode the password


// Use the encoded password in the connection URI
mongoose.connect(process.env.MONGO).then(() =>{
    console.log('connected to MongoDB');
}).catch((err) => {
    console.log(err);
});
console.log();

const app = express();

app.listen(3000, () => {
    console.log(`Server running on port http://localhost:3000`);
});
