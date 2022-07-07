
 import {GET_COUNTRIES, ORDER_BY, SEARCH_COUNTRIES,
   SET_CONTINENTS, SET_COUNTRIES, GET_ALL_ACTIVITIES,
   GET_ALL_ACTIVITIES_COUNTRIES,SET_ACTIVITIES_C,
  GET_BY_PK,
  SET_FORM_COUNTRIES, DELETE_COUNTRIE_FROM_FORM
, RESET_COUNTRIE_FORM} from './actions.js'


const initialState = {
  allCountries :[], 
  filterCountries: [], 
  countryPK : {}, 
  allActivities: [],
  activityCountrie : [],
  filter : {

    query:"",

    orderBy: "AZ",

    continents: [],

    activities: 'none'   
  },
  formCountries: [],
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
  if(action.type === SET_ACTIVITIES_C){
    return {...state, filter: {...state.filter, activities: action.payload}}
  }
  if(action.type === GET_ALL_ACTIVITIES){
    return {...state, allActivities: action.payload}
  }
  if(action.type === GET_ALL_ACTIVITIES_COUNTRIES){
    return {...state, activityCountrie: action.payload}
  }
  if(action.type === GET_BY_PK){
    return {...state , countryPK: action.payload}
  }
  if(action.type === SET_FORM_COUNTRIES){
    return {...state, formCountries: [...state.formCountries, action.payload]}
  }
  if(action.type === DELETE_COUNTRIE_FROM_FORM){
    return {...state, formCountries: [...state.formCountries].filter(e => e.name !== action.payload)}
  }
  if(action.type === RESET_COUNTRIE_FORM){
    return {...state, formCountries: []}
  }

  return state;
}