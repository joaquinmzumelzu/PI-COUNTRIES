//
import { Link } from 'react-router-dom'
import s from '../styles/Landing.module.css'
//

export default function Landing (){
    return (
        <div className={s.div}>
          <h1 className={s.h1}>HENRY COUNTRIES</h1>

          <Link className={s.button} to='/countries'>
            <button >Get Started</button>
          </Link>
        </div>
    )
}