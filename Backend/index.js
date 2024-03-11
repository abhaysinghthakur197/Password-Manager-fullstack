const express = require('express')
const UserRoute  = require('./routes/userRoute') 

// const {mongoDbToConnect} = require('./connection')

const mongoose = require('mongoose')

// Adding cors for getting the req
const cors = require('cors');
const cookieParser = require('cookie-parser');


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



app.get('/',(req,res) => {
    res.send('<h1>Hello from Server Ji!!!</h1>')
})

app.use('/api/user',UserRoute)

app.listen(PORT, () => {  
    console.log(`server is runnint at ${PORT}`)}
);


