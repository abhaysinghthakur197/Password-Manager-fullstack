const express = require('express')
const router = express.Router();

const {handleSignUp,handleUserLogin} = require('../controllers/user')


router.get("/login",handleUserLogin)
router.get("/signup",handleSignUp)


// router.post("/login", handleUserLogin);
// router.post("/signup",handleSignUp)


module.exports = router;

