import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setCountries } from '../redux/actions'
import s from '../styles/Container.module.css'
import Card from './Card'
//

export default function Container (props){
    const dispatch = useDispatch()
    const allCountries = useSelector((state) => state.allCountries)

    useEffect(() => dispatch(setCountries(allCountries)), [allCountries,dispatch])
    


    let filterCountries = useSelector(state => state.filterCountries)
    const filter = useSelector(state => state.filter)

    useEffect(() => {
      let filtrados = [];

      if(filter.query === ""){
        console.log("entro")
        filtrados = [...allCountries]
        // dispatch(setCountries(allCountries))
      }
      else{
        filtrados = [...allCountries].filter(e => e.name.toLowerCase().includes(filter.query.toLowerCase()))
        //  
      }
      // -----------------------------------------------------------------------------------------------
   
      if(filter.orderBy === "AZ") filtrados.sort((a, b) => a.name.localeCompare(b.name))
      if(filter.orderBy === "ZA") filtrados.sort((a, b) => b.name.localeCompare(a.name))
      if(filter.orderBy === "HP") filtrados.sort((a, b) => b.population - a.population)
      if(filter.orderBy === "LP") filtrados.sort((a, b) => a.population - b.population)
      
      dispatch(setCountries(filtrados))
    }, [filter,allCountries,dispatch])

    return (
        <div className={s.div}>
           {
              filterCountries.map(e => {
              return <Card continent={e.continent} name={e.name} img={e.img}/>

           })

           
           }
        </div>
    )
}