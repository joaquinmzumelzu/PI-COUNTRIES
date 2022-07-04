 import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES"
export const SET_COUNTRIES = "SET_COUNTRIES"

export const ORDER_BY = "ORDER_BY"
export const SET_CONTINENTS = "SET_CONTINENTS"
export const SET_ACTIVITIES_C = 'SET_ACTIVITIES_C'
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES'
export const GET_ALL_ACTIVITIES_COUNTRIES = 'GET_ALL_ACTIVITIES_COUNTRIES'
export const GET_BY_PK = 'GET_BY_PK'





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

export function orderBY (typeOrder) {
    return {type: ORDER_BY, payload: typeOrder}  
}

export function SETContinents (value) {
    return {type: SET_CONTINENTS, payload:value}
}

export function setActivitiesC (value) {
    return {type: SET_ACTIVITIES_C, payload:value}
}

export  function getAllActivities () {
    return function(dispatch){
        return fetch('http://localhost:3001/activities')
        .then(r => r.json())
        .then(data=> dispatch({type:GET_ALL_ACTIVITIES,payload:data}))
        .catch(e => console.log(e))  
    }
}

export  function getAllActivitiesCountries () {
    return function(dispatch){
        return fetch('http://localhost:3001/activities/countries')
        .then(r => r.json())
        .then(data=> {dispatch({type:GET_ALL_ACTIVITIES_COUNTRIES,payload:data})})
        .catch(e => console.log(e))  
    }
}

// export  function getAllActivitiesCountries () {
//     axios.get('http://localhost:3001/activities/countries')  
//     .then(d => d.data)
//     .then(data=> dispatch({type:GET_ALL_ACTIVITIES_COUNTRIES,payload:data}))
//     .catch(e => console.log(e))  
    
// }

export function getByPK (id){
    return function(dispatch){
        return fetch(`http://localhost:3001/countries/${id}`)
        .then(r => r.json())
        .then(data=> dispatch({type:GET_BY_PK,payload:data}))
        .catch(e => console.log(e))  
    }
}