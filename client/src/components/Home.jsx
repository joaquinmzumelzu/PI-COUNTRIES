//
import s from '../styles/Home.module.css'
import Container from './Container'
import Filters from './Filters'
import { Link } from 'react-router-dom'
import Header from './Header'
//

export default function Home (props){
    
    return (
        <div className={s.div}>
          
          <Filters/>
           
           <div className={s.effect}>

           <div className={s.title}>
             <h1 className={s.text}>HOME</h1>
           </div>

           <Container/>

           </div>

    

        </div>
    )
}