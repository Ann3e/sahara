const userModel = require("../models/user.js");
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');


//  desc:   signup user
//  route:  POST/api/auth/signup
//  access: Public
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: 'User already exists, you can login',
                success: false
            });
        }

        const newUser = new userModel({ name, email, password }); // ✅ FIXED VARIABLE NAME
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();

        res.status(201).json({
            message: 'Signup successful',
            success: true
        });

    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Internal server error', success: false });
    }
};


//  desc:   login user
//  route:  POST/api/auth/login
//  access: Public
const login = async (req, res) => {
     try {
        const { name, email, password } = req.body;

        const existingUser = await userModel.findOne({ email});
        if (!existingUser) {
            return res.status(403).json({
                message: 'User doesnt exists,pls sign up',
                success: false
            });
        }

        const isPasswordEqual=await bcrypt.compare(password, existingUser.password);
        if(!isPasswordEqual){
            return res.status(403).json({
                message: 'Invalid credentials',
                success: false
            });
        }

        const jwtToken= jwt.sign(
            {email:existingUser.email,_id:existingUser._id},
            process.env.JWT_SECRET,
            {expiresIn:'24h'}
        )
        

        res.status(200).
            json({
                _id: existingUser._id,
                // _id,
                message:'Login succesful',
                success: true,
                jwtToken,
                email,
                name: existingUser.name
        });


    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Internal server error', success: false });
    }
};

module.exports = {
    signup,
    login
};
