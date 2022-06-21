
const express = require('express')
const router = express.Router()
const axios = require('axios');
const {Country, Atractive} = require('../db.js')
const { Op } = require("sequelize");


//  ID : {
//  name: {
//  img : {
//  continent: {
//  capitalCity : {
//  subRegion : {
//  area :{
//  population : {

router.get('/', async (req,res) => { // query /students?name=jesus
   try {
      const response = await axios.get('https://restcountries.com/v3/all');
      const allCountries = response.data
      const {name} = req.query;

      await allCountries.forEach((e) => Country.findOrCreate({
         where : {
           ID: e.cca3,
         },
         defaults: {
            ID: e.cca3,
            name: e.name.common,
            img: e.flags[0], // --> en la api aparece como objeto pero en realidad es array???
            continent: e.continents[0], // puede que sea [0]
            capitalCity: e.capital? e.capital[0] : "",
            subRegion: e.subregion || "",
            area: e.area,
            population: e.population,
         }
      })) 
      if(!name) return res.json(await Country.findAll())
      // ---------------------------------------------------
      let findCountries = await Country.findAll({
         where : {
            name : {
               [Op.iLike] : `%${name}%`
            }
         }
      })
      //----------------------------------------------------
      if(!findCountries.length) return res.json({msg: 'no countries where find'})

      //----------------------------------------------------
      res.json(findCountries)
      
    } catch (err) {
      console.log(err)
      res.json({error : err})
    }
});

router.get('/:id', async (req,res) => { // query /students?name=jesus
    const {id} = req.params;
    try {
      const countrie = await Country.findOne({where: {ID : id.toUpperCase()}, include: Atractive })
      if(!countrie) return res.status(404).json({error:'the code given does not match any country'})
      res.status(200).send(countrie)
    } catch (error) {
      res.json({error:'server error'})
    }
});

module.exports = router ;