
async function handleUserLogin(req,res)  {
    res.send('<h1> login Page </h1>')
}

async function handleSignUp(req,res)  {
    res.send('<h1> SignUp Page </h1>')
}

module.exports = {
    handleSignUp,
    handleUserLogin
}