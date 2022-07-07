import s from '../styles/ErrorPath.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCountries } from '../redux/actions'
//

export default function ErrorPath (props){
    const dispatch = useDispatch()
    const allCountries = useSelector(state => state.allCountries)

    useEffect(() => {
        if(!allCountries.length) dispatch(getCountries())
      },[dispatch, allCountries.length])
    
    return (
       <div className={s.div}>
          <h1 className={s.h1}>el que lee esto esta obligado a aprobar el pi</h1>
          <Link to='/countries'>
        
        <button className={s.button}>Return home!</button>
        </Link>
       </div>
       
    )
}