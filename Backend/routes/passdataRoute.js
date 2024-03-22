const express = require('express')
const router = express.Router();
const {handlePassdata, handleGetPassData, handleDeleteTableData}  = require('../controllers/passdataController')

router.post('/', handlePassdata)
router.get('/',handleGetPassData)
router.delete('/delete/:id', handleDeleteTableData)

module.exports = router;