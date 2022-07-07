//
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllActivities, getAllActivitiesCountries, getCountries } from '../redux/actions'
import s from '../styles/Landing.module.css'
//

export default function Landing (){
  
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getCountries()) 
      dispatch(getAllActivities())  
      dispatch(getAllActivitiesCountries())
    },[dispatch]) 

    return (
        <div className={s.div}>
          <div className={s.second}>

          <h1 className={s.h1}>HENRY COUNTRIES</h1>
          <div className={s.third}>

          <p className={s.h1}>Welcome to Henry Countries, in here you will find all the countries details and the activities that you can do on it</p>
          </div>
          </div>
          
          <div className={s.divButton}>

            <Link to='/countries'>
              <button className={s.button} >Get Started</button>
            </Link>
          </div>

        </div>
    )
}