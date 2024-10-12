const userRouter = require('./routers/users.router');
const productsRouter = require('./routers/products-routes')

// import env
require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(userRouter, productsRouter);

app.use((req,res,next)=>{
    res.send('404 not found')
    next()
})
const PORT = process.env.PORT
app.listen(PORT, (req, res)=>{
    console.log(`Server run success on http://localhost:${PORT}`);
})




