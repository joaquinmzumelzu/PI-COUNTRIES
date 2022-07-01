//
import s from '../styles/Home.module.css'
import Container from './Container'
import Filters from './Filters'
import { Link } from 'react-router-dom'
//

export default function Home (props){
    
    return (
        <div className={s.div}>

           <div className={s.header}>
           </div>

           <div className={s.title}>
             <h1>HOME</h1>
             <Link to ='/activity'>CREATE ACTIVITY</Link>
           </div>

           <Filters/>
           <Container/>
    

        </div>
    )
}