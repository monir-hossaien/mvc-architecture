
// import env
require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const userRouter = require('./routers/users.router');
app.use(userRouter);
app.use(express.urlencoded({extended: true}));



const PORT = process.env.PORT


app.listen(PORT, (req, res)=>{
    console.log(`Server run success on http://localhost:${PORT}`);
})




