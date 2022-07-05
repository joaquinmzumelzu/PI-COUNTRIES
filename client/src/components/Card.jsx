import s from '../styles/Card.module.css'
import { Link } from 'react-router-dom'
//

export default function Card (props){
    
    return (
      <Link className={s.link} to={`/countries/${props.id}`}>
        <div className={s.div}>
           
          <img className={s.img} alt='bandera' src={props.img}></img>    
          <p className={s.p1}>{props.name}</p>
          <p className={s.p1}>{props.continent}</p>
        </div>
      </Link>
   
    )
}