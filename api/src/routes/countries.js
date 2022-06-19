
const express = require('express')
const router = express.Router()



router.get('/', (req,res) => { // query /students?name=jesus
   res.json({status:'avanzando'})
});

module.exports = router ;