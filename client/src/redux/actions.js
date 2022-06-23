// import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";


export  function getCountries(){
    return function(dispatch){
        return fetch('http://localhost:3001/countries')
        .then(r => r.json())
        .then(countries=> dispatch({type:GET_COUNTRIES,payload:countries}))
        .catch(e => console.log(e))  
    }
  }
