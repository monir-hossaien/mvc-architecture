
let users = require('../models/users-model');
const path = require("path");

// GET request: Serve the HTML file
exports.getUser = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
}

// POST request: Add a new user
exports.postUser = (req, res) => {
    const name = req.body.fullName;
    const age = Number(req.body.age);

    let user ={
        name,
        age,
    }
    console.log(user)

    users.push(user);  // Add the new user to the users array

    res.status(201).json({
        success: true,
        users  // Return the updated list of users
    });
}

