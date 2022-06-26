
 import {GET_COUNTRIES, SEARCH_COUNTRIES, SET_COUNTRIES} from './actions.js'


const initialState = {
  allCountries :[], 
  filterCountries: [], 
  countryPK : {}, 
  filter : {

    query:"",

    alphabetically: {
      status : true,
      az : true,
    },

    byPopulation : {
      status : false,
      des : true,
    },

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

  return state;
}