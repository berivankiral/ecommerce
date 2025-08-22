const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User.js");

// const defaultAvatar = "https://www.w3schools.com/howto/img_avatar.png"; 

//kullanıcı oluşturma(create- register)
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "email adresi kayıtlı" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
    //   avatar: defaultAvatar,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

//kullanıcı girişi (login)
router.post("/login", async(req, res)=>{
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email})
        if(!user){
            return res.status(401).json({error: "Invalid email"});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({error: "Invalid password"});
        }
        res.status(200).json({
            id: user._id,
            email: user.email,
            username: user.username,
            role: user.role,
            // avatar: user.avatar,
        });
    } catch (error) {
        console.log(error);
    res.status(500).json({ error: "Server error." });
    }
})
module.exports = router;
