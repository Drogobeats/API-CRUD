const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.user_index);
router.post('/', userController.user_create_post);
router.get('/add-user', userController.user_create_get);
router.get('/:id', userController.user_details);
router.delete('/:id', userController.user_delete);
router.put('/:id', userController.user_update);

module.exports = router; 