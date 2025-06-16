// // JWT verification middleware

const jwt = require("jsonwebtoken");
const User = require("../models/user");

const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    token = token.split(" ")[1];
    console.log('Token received:', token); // ✅ move this here

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded JWT:", decoded);

    req.user = await User.findById(decoded._id).select("-password");

    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }

    next(); // ✅ allow access to the route
  } catch (error) {
    // if (error.name === 'TokenExpiredError') {
    //   return res.status(401).json({ message: 'Token expired. Please log in again.' });
    // }

    // console.error("Protect middleware error:", error.message);
    // return 
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = protect;
