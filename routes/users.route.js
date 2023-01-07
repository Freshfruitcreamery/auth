const express = require('express');
const router = express.Router();

// Importing users controller
const usersCtrl = require('../controllers/users.controller');
const usersMiddleware = require('../middleware/users.middleware');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/create', usersMiddleware.isInputValidated, usersCtrl.createUser);
router.get(
  '/all',
  [
    authMiddleware.authenticateUser,
    authMiddleware.isProductCodeInputValidated,
    authMiddleware.validateUserProduct,
    authMiddleware.validateUserScope,
  ],
  usersCtrl.getAllUsers
);
router.get('/:id', authMiddleware.authenticateUser, usersCtrl.getUserByID);
router.post('/update', [authMiddleware.authenticateUser], usersCtrl.updateUser);
router.put(
  '/update/:id',
  [authMiddleware.authenticateUser],
  usersCtrl.updateUserByID
);
router.delete(
  '/remove/:id',
  [
    authMiddleware.authenticateUser,
    authMiddleware.isProductCodeInputValidated,
    authMiddleware.validateUserProduct,
    authMiddleware.validateUserScope,
  ],
  usersCtrl.deleteUser
);

module.exports = router;
