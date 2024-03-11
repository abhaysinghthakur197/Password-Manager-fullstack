const userModel = require('../models/userModel')





async function userLogin(req,res)  {
    res.send('<h1> login Page </h1>')
}

async function userSignUp(req,res)  {
    res.send('<h1> SignUp Page </h1>')
}

async function handleUserLogin(req,res)  {
    const {email,password} = req.body;
    // console.log(req.body)
    try {
        const token = await userModel.matchPasswordandgenerateToken(email,password)
        // console.log("token",token);
        res.cookie("token",token)
        return res.status(200).json({ message: "Signin successful"});
    } catch (error) {
        console.log("error in login",error)
        res.json({message: 'Incorrect email or password'})    
    }
}

async function handleSignUp(req,res)  {
    const {firstName, lastName, email, password} = req.body;
    // console.log(req.body)
    const avatar = req.file ? req.file.path : null;
    // console.log(req.file)
    try {
        await userModel.create({
            firstName,
            lastName,
            email,
            password,
            avatar: `/avatar/${req.file.filename}`,
        }); 
        res.status(201).json({message: 'Signup Successful'})
    }
    catch (e) {
        console.log("error in sign up", e);
        res.status(500).json({error: 'Internal server error'});
    }
}

module.exports = {
    userLogin,
    userSignUp,
    handleSignUp,
    handleUserLogin
}