const express = require('express')
const router = express.Router()
const {Atractive} = require('../db.js')
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
    const { name , difficulty, duration, season} = req.body
    try {
        let activity = await Atractive.create(req.body);
        res.send(activity)
    } catch (error) {
        res.send({error: "error"})
    }
});



module.exports = router ;