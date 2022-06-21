
 import {GET_COUNTRIES} from './actions.js'


const initialState = {allCountries :[], countryQuery: [], countryPK : {}, }


export default function reducer(state = initialState,action){
  if(action.type === GET_COUNTRIES){
    return {...state, allCountries: action.payload}
  }
  return state;
}