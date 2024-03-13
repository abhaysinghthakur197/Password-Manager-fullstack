const passdataModel = require('../models/passdataModel')

async function handlePassdata(req,res) {

    const {key,password,description} = req.body
    console.log(req.body)

    try {
        
    } catch (error) {
        console.log("error in db update of password data",error)
    }

}