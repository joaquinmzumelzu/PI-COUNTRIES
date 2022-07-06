//
import { Link } from 'react-router-dom'
import s from '../styles/Header.module.css'

import home from '../imgs/home.jpg'
import agregar from '../imgs/agregar.png'
//

export default function Header (props){
    
    return (
        <div className={s.div}>
           <Link to='/countries'>
             <div className={s.home}>
             </div>
           </Link> 

           <Link to='/activity'>
             <div className={s.agregar}>

             </div>
           </Link> 
        </div>
    )
}