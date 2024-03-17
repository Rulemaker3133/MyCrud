const User = require('../models/user.model.js');



const getAllUsers = async (req, res) => { // Get All Users
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getOneUser = async (req, res) => { // Get user by ID
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
 
const createUser = async (req, res) => { // Create new user 
    try {
        const user = req.body;
        const newUser = await User.create(user);
        res.status(200).send(newUser);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const updateUser = async (req, res) => { // Update user by ID
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if (!user) {
            return res.status(404).send('User not found');
        }
        const updatedUser = await User.findById(id);
        res.status(200).send(updatedUser);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const deleteUser = async (req, res) => { // Delete user by ID
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).send('User deleted successfully');
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
}