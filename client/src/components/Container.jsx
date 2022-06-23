import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import s from '../styles/Container.module.css'
import Card from './Card'
//

export default function Container (props){

    const allCountries = useSelector((state) => state.allCountries)
    useEffect(() => console.log(allCountries))
    
    
    return (
        <div className={s.div}>
           {allCountries?.map(e => {
              return <Card continent={e.continent} name={e.name} img={e.img}/>
           })}
        </div>
    )
}