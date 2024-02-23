const express = require('express')
const UserRoute  = require('./routes/user') 
const app = express();
const PORT = 8000


app.get('/',(req,res) => {
    res.send('<h1>Hello from Server Ji!!!</h1>')
})

app.use('/api/user',UserRoute)

app.listen(PORT, () => {  
    console.log(`server is runnint at ${PORT}`)}
);


