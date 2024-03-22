const express = require('express')
const UserRoute  = require('./routes/userRoute') 
const PassdataRoute = require('./routes/passdataRoute')

// const {mongoDbToConnect} = require('./connection')

const mongoose = require('mongoose')

// Adding cors for getting the req
const cors = require('cors');
const cookieParser = require('cookie-parser');

const {checkForAuthenticationCookie} = require('./middleware/authentication')

const app = express();



// const URL = 'mongodb+srv://webconceit:PasswordManager%40123@password-    manager-cluste.xkmqz4k.mongodb.net/'
// const URL = 'mongodb://localhost:27017/passwordManager'
const PORT = 8000


app.use(cors({ origin: true, credentials: true }));


// database
// mongoDbToConnect(URL)
mongoose.connect("mongodb://127.0.0.1:27017/passwordManager").then(console.log("connected")).catch((e) => console.log(e));

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));


app.get('/api/passData',(req,res) => {
    user = req.user
    console.log("user",user)
    res.redirect(user)
})

app.use('/api/user',UserRoute)
app.use('/api/passData', PassdataRoute)

app.listen(PORT, () => {  
    console.log(`server is runnint at ${PORT}`)}
);


