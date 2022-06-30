
 import {GET_COUNTRIES, ORDER_BY, SEARCH_COUNTRIES, SET_CONTINENTS, SET_COUNTRIES} from './actions.js'


const initialState = {
  allCountries :[], 
  filterCountries: [], 
  countryPK : {}, 
  filter : {

    query:"",

    orderBy: "AZ",

    continents: [],

    activities: []   
  }
}


export default function reducer(state = initialState,action){
  if(action.type === GET_COUNTRIES){
    return {...state, allCountries: action.payload}
  }
  if(action.type === SET_COUNTRIES){
  return {...state, filterCountries: action.payload}
}
  if(action.type === SEARCH_COUNTRIES){
  return {...state, filter: {...state.filter, query: action.payload}}
}
  if(action.type === ORDER_BY){
    return {...state, filter : {...state.filter, orderBy: action.payload}}
  } 
  if(action.type === SET_CONTINENTS){
    return {...state, filter: {...state.filter, continents: action.payload}}
  }

  return state;
}