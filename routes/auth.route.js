const express = require('express');
const router = express.Router();

// Importing auth controller
const authCtrl = require('../controllers/auth.controller');
const userCtrl = require('../controllers/users.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Initiate password reset
router.post('/send', [authMiddleware.isInputValidated], authCtrl.sendAuthUser);

// Verify reset password
router.get(
  '/verify/reset',
  authMiddleware.verifyPasswordResetOtp,
  authCtrl.RenderUser
);

// Verify account through email upon signup
router.get('/verify/email', authMiddleware.verifyEmail, authCtrl.RenderUser);

// reset password
router.post(
  '/password/reset',
  [
    authMiddleware.verifyPasswordResetTokenPassedAsHeader,
    authMiddleware.isPasswordInputValidated,
  ],
  authCtrl.resetPassword
);

// reset password
router.post(
  '/reset',
  [authMiddleware.authenticateUser, authMiddleware.isPasswordInputValidated2],
  authCtrl.resetPassword
);

//This is to verify an authorized user
router.post('/verify', [authMiddleware.authenticateUser], authCtrl.RenderUser);

// Signin a user
router.post(
  '/signin',
  [
    authMiddleware.isSigninInputValidated,
    authMiddleware.isProductCodeInputValidated,
    authMiddleware.validateUserProduct,
  ],
  userCtrl.signInUser
);

// activate a user
router.put(
  '/activate/:user_id',
  [
    authMiddleware.authenticateUser,
    authMiddleware.isProductCodeInputValidated,
    authMiddleware.validateUserProduct,
    authMiddleware.validateUserScope,
  ],
  authCtrl.activateUser
);

// deactivate a user
router.put(
  '/deactivate/:user_id',

  [
    authMiddleware.authenticateUser,
    authMiddleware.isProductCodeInputValidated,
    authMiddleware.validateUserProduct,
    authMiddleware.validateUserScope,
  ],
  authCtrl.deactivateUser
);

module.exports = router;
