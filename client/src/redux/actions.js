// import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES"
export const SET_COUNTRIES = "SET_COUNTRIES"


export  function getCountries(){
    return function(dispatch){
        return fetch('http://localhost:3001/countries')
        .then(r => r.json())
        .then(countries=> dispatch({type:GET_COUNTRIES,payload:countries}))
        .catch(e => console.log(e))  
    }
  }


export function setCountries (countries) {
    return {type: SET_COUNTRIES, payload: countries}
}

export function searchCountries (value) {
    return {type: SEARCH_COUNTRIES, payload: value}
} 