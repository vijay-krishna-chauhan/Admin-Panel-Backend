
const User = require('../models/User');

// Get All Users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Create User
exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;
  try {
    const user = new User({ firstName, lastName, email, password, role });
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Update User
exports.updateUser = async (req, res) => {
  const { firstName, lastName, email, role } = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { firstName, lastName, email, role }, { new: true });
    res.json(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
