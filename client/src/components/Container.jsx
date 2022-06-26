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
      if(filter.query){
        let filtrados = allCountries.filter(e => e.name.toLowerCase().includes(filter.query.toLowerCase()))
        dispatch(setCountries(filtrados))
      }
    }, [filter])

    return (
        <div className={s.div}>
           {filterCountries?.map(e => {
              return <Card continent={e.continent} name={e.name} img={e.img}/>
           })}
        </div>
    )
}