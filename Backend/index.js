const express = require('express')
const UserRoute  = require('./routes/userRoute') 

const {mongoDbToConnect} = require('./connection')
const app = express();

const URL = 'mongodb+srv://webconceit:PasswordManager%40123@password-manager-cluste.xkmqz4k.mongodb.net/'
const PORT = 8000


// database
const dbResponse = mongoDbToConnect(URL)


app.get('/',(req,res) => {
    res.send('<h1>Hello from Server Ji!!!</h1>')
})

app.use('/api/user',UserRoute)

app.listen(PORT, () => {  
    console.log(`server is runnint at ${PORT}`)}
);


