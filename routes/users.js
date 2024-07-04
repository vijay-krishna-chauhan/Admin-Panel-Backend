
const express = require('express');
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');
const auth = require('../middlewares/auth');

router.get('/', auth('Admin'), getUsers);
router.post('/', auth('Admin'), createUser);
router.put('/:id', auth('Admin'), updateUser);
router.delete('/:id', auth('Admin'), deleteUser);

module.exports = router;
