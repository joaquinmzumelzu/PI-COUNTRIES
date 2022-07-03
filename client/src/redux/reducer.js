
 import {GET_COUNTRIES, ORDER_BY, SEARCH_COUNTRIES,
   SET_CONTINENTS, SET_COUNTRIES, GET_ALL_ACTIVITIES,
   GET_ALL_ACTIVITIES_COUNTRIES,SET_ACTIVITIES_C} from './actions.js'


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
  if(action.type === SET_ACTIVITIES_C){
    return {...state, filter: {...state.filter, activities: action.payload}}
  }
  if(action.type === GET_ALL_ACTIVITIES){
    return {...state, allActivities: action.payload}
  }
  if(action.type === GET_ALL_ACTIVITIES_COUNTRIES){
    return {...state, activityCountrie: action.payload}
  }

  return state;
}