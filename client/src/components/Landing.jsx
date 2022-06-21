//
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCountries2, getCountries } from '../redux/actions'
import s from '../styles/Landing.module.css'
//

export default function Landing (){
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getCountries())   
    },[dispatch]) 

    return (
        <div className={s.div}>
          <h1 className={s.h1}>HENRY COUNTRIES</h1>

          <Link className={s.button} to='/countries'>
            <button >Get Started</button>
          </Link>
        </div>
    )
}