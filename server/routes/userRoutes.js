const express=require('express')
const { loginValidation, signupValidation } = require('../middlewares/AuthValidation')
const { signup, login } = require('../controllers/authController')
const router= express.Router()


router.post('/signup',signupValidation,signup); //goes to the sign up controller only if its valid by signup validation
router.post('/login', loginValidation, login);   


module.exports = router;
