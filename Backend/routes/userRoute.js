const express = require('express')
const router = express.Router();

const {userLogin, userSignUp,handleSignUp,handleUserLogin} = require('../controllers/userController')

const multer = require('multer')
const path = require('path')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(`./public/avatar`));
    },
    filename: function (req, file, cb) {
        const firstName = 'avatar'; 
        const currentDate = new Date().toISOString().slice(0, 10); 
        const fileName = `${firstName}-${currentDate}-${file.originalname}`;
        cb(null,fileName)
    }
});
const upload = multer({ storage: storage });


router.get("/login",userLogin)
router.get("/signup",userSignUp)


router.post("/login", handleUserLogin);
router.post("/signup",upload.single("avatar"), handleSignUp)


module.exports = router;

