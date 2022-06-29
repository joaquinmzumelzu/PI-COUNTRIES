
 import {GET_COUNTRIES, ORDER_BY, SEARCH_COUNTRIES, SET_COUNTRIES} from './actions.js'


const initialState = {
  allCountries :[], 
  filterCountries: [], 
  countryPK : {}, 
  filter : {

    query:"",

    orderBy: "AZ",

    continents: {
      Antartica : false,
      Africa : false ,
      Asia : false,
      Europe: false, 
      NorthAmerica: false,
      Oceania : false,
      SouthAmerica:false,
    },

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

  return state;
}