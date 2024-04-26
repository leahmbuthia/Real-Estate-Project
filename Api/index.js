import express from 'express'

const app = express();
// const port = process.env.PORT || 3000;

//middlewares
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, () => {
    console.log(`server running on port http://localhost:3000`);
})