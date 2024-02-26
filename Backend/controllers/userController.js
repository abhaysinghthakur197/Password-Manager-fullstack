const userModal = require('../models/userModel')
const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(`./public/`));
    },
    filename: function (req, file, cb) {
        const username = req.body.username; 
        const currentDate = new Date().toISOString().slice(0, 10); 
        const fileName = `${username}-${currentDate}-${file.originalname}`;
        cb(null,fileName)
    }
});
const upload = multer({ storage: storage });


async function userLogin(req,res)  {
    res.send('<h1> login Page </h1>')
}

async function userSignUp(req,res)  {
    res.send('<h1> SignUp Page </h1>')
}

async function handleUserLogin(req,res)  {
    res.send('<h1> login Page post side</h1>')
}

async function handleSignUp(req,res)  {
    const {fullName, email, password} = req.body;
    try {
        upload.single('profileImage')(req, res, async function (err) {
            if (err) {
                console.error('Error uploading file:', err);
                return res.status(500).json({ error: 'File upload error' });
            }
        const profileImage = req.file ? req.file.path : null;

        await userModal.create({
            fullName,
            email,
            password,
            profileImage
         }); 
        res.status(201).json({message: 'Signup Successful'})
    })}
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