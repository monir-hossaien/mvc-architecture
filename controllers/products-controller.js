
let products = require('../models/products-model');
const path = require("path");

// GET request: Serve the HTML file
exports.getProducts = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/product.html'));
}

// POST request: Add a new user
exports.postProducts = (req, res) => {
    const name = req.body.name;
    const price = Number(req.body.price);

    let product ={
        name,
        price,
    }
    console.log(product)

    products.push(product);  // Add the new user to the users array

    res.status(201).json({
        success: true,
        products  // Return the updated list of users
    });
}

