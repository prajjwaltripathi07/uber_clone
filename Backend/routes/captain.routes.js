const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const {body}=require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/register', [
    body('email').isEmail().withMessage('Invalid email address'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('invalid firstname: must be 3 characters at least'),
    body('password').isLength({ min: 6 }).withMessage('invalid password: must be 6 characters at least'),
    body('vehicle.color').isLength({min:3}).withMessage('Vehicle color is required'),
    body('vehicle.plate').isLength({min:3}).withMessage('Vehicle plate is required'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Vehicle capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Vehicle type is required'),
],
captainController.registerCaptain

)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('invalid password: must be 6 characters at least'),
],
captainController.loginCaptain
)

router.get('/profile',authMiddleware.authCaptain ,captainController.authCaptain, captainController.getCaptainProfile)

router.get('/logout',authMiddleware.authCaptain, captainController.authCaptain, captainController.logoutCaptain)

module.exports = router;