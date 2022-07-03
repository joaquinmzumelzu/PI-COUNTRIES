const express = require('express')
const router = express.Router()
const {Atractive, Country} = require('../db.js')
const { Op } = require("sequelize");


// ID : {

//   //-------------------------------------- ---> OBLIGATORIA
//   name: {

//   //-------------------------------------- ---> OBLIGATORIA
//   difficulty : {

//   //-------------------------------------- ---> OBLIGATORIA
//   duration: {

//   season : {



router.post('/', async (req,res) => { 
    const { name , difficulty, duration, season,countries} = req.body
    console.log(countries)
    try {
        let activity = await Atractive.create(req.body);
        countries.forEach(async (e) => {
            let countrie = await Country.findByPk(e.id)
            await activity.addCountry(countrie)

        })
        res.send(activity)
    } catch (error) {
        console.log(error)
        res.send({error: "error"})
    }
});

router.get('/', async (req,res) => {
    try {
      let allActivities = await Atractive.findAll()
      if(!allActivities) return res.json('no activities where found')  
      res.json(allActivities) 
    } catch (error) {
      console.log(error)  
    }
})

router.get('/countries', async (req,res) => {
    try {
      let allActivities = await Atractive.findAll({include:Country})
      
      if(!allActivities) return res.json('no activities where found')  
      res.json(allActivities) 
    } catch (error) {
      console.log(error)  
    }
})





module.exports = router ;