const passdataModel = require('../models/passdataModel')

async function handlePassdata(req, res) {

    const { key, password, description } = req.body
    console.log(req.body)

    try {
        await passdataModel.create({
            key,
            password,
            description
        });
        res.status(201).json({ message: 'Updated pass data successfully' })
    } catch (error) {
        console.log("error in db update of password data", error)
    }

}

async function handleGetPassData(req, res) {
    const allData = await passdataModel.find({})
    res.status(200).json(allData)
}


// delete table data
async function handleDeleteTableData(req,res) {
    const {id}  = req.params
    console.log("id",id)
    try {
        const deletePassData = await passdataModel.findByIdAndDelete(id)
        console.log("deletepassdata",deletePassData)
        if(!deletePassData) {
            return res.status(404).json({error: "Deletion is not sucessful"})
        }  
        res.status(200).json({message: "succesfully getting message"})
    } catch (error) {
        console.log("error while deleting the data",error)
        res.status(500).json({error: "Internal server error"})
    }

}

module.exports = {
    handlePassdata,
    handleGetPassData,
    handleDeleteTableData
}