//
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { searchCountries, orderBY, SETContinents, setActivitiesC } from '../redux/actions'
import s from '../styles/Filters.module.css'
//

export default function Filters (props){

  const dispatch = useDispatch()
  const[input,setInput] = React.useState({value: "" })
  const[orderBy,setOrderBy] = React.useState("AZ")
  const [continents, setContinents] = React.useState({
    Antartica : false,
    Africa : false ,
    Asia : false,
    Europe: false, 
    NorthAmerica: false,
    Oceania : false,
    SouthAmerica:false,
  });
  const [activities, setActivities ] = React.useState('none')
  
  const allActivities = useSelector(state => state.allActivities)
  // let query = useSelector(state => state.filter.query)

  function handleCheckBoxChanges(e){
    console.log(e)
    if(e.target.checked === true){
        setContinents({...continents, [e.target.value] : true})
    }
    if(e.target.checked === false){
        setContinents({...continents, [e.target.value] : false})
    }
  }
  
  function handleInputChanges(e){
    setInput({...input, value : e.target.value});
    
  } 

  function handleFilterChanges(e){
    e.preventDefault() 
    if(e.target.value === "A - Z") setOrderBy("AZ")
    if(e.target.value === "Z - A") setOrderBy("ZA")
    if(e.target.value === "Higher Population") setOrderBy("HP")
    if(e.target.value === "Lower Population") setOrderBy("LP")
  }

  function handleActivitiyChanges(e){
    e.preventDefault() 
    setActivities(e.target.value)
    dispatch(setActivitiesC(e.target.value))
  }
  
  useEffect(() => dispatch(searchCountries(input.value)) , [input])
  useEffect(() => dispatch(orderBY(orderBy)) , [orderBy])
  useEffect(() => {
    // let continents2 = [...continents]
    let array = [];
    for(let i in continents){
      if(continents[i] === true){
        if(i === 'NorthAmerica'){
          array.push('North America')
          continue
        }
        if(i === 'SouthAmerica'){
          array.push('South America')
          continue
        }
        array.push(i)
      }
    }
    dispatch(SETContinents(array)) 
  },[continents])


    return (
        <div className={s.div}>

            <div className={s.form}>
              <p>Country name</p>
              <form>
                <input value={input.value} onChange={(e) => handleInputChanges(e)}></input>
              </form> 
            </div>


            <div className={s.orderBy}>
              <p>Order by</p>
              <select onChange={e => handleFilterChanges(e)}>

                <option>A - Z</option>
                <option>Z - A</option>
                <option>Higher Population</option>
                <option>Lower Population</option>
     
              </select>
          
            </div> 


            <div className={s.filterBy}>
              <p>Filter by :</p>

              <div className={s.filters2}>
              <div className={s.fContinents}>
                <p>Continents</p>
                <form onChange={handleCheckBoxChanges}>

                  <input value='Antarctica'type='checkbox'></input>Antarctica<br/>
                  <input value='Africa'type='checkbox'></input>Africa<br/>
                  <input value='Asia'type='checkbox'></input>Asia<br/>
                  <input value='Europe'type='checkbox'></input>Europe<br/>
                  <input value='NorthAmerica'type='checkbox'></input>North America<br/>
                  <input value='Oceania'type='checkbox'></input>Oceania<br/>
                  <input value='SouthAmerica'type='checkbox'></input>South America<br/>
                </form>
                
              </div>

              <div className={s.fActivities}>
                <p>Activities</p>

                <select onChange={handleActivitiyChanges} defaultValue="Select option">
                  <option disabled value="Select option">Select activity</option>
                  <option value='none'>None</option>
                  {allActivities?.map(e => {
                    return <option value={e.name}>{e.name}</option>
                  })}

                </select> 
              </div>

              </div>
            

            </div>

        </div>
    )
}