const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

 

// Create and Save a new Tutorial
exports.create = (req, res) => {
};
// Retrieve all Tutorials from the database.
exports.findAll = async(req, res) => {
    let allUsers = await User.findAll();
    return res.json({
        status:'ok' ,
        data: allUsers
    }) 
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};