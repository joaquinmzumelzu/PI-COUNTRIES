import s from '../styles/CardMini.module.css'

//

export default function CardMini (props){
    
    return (

        <button onClick={props.function} value={props.value} className={s.div}>
          <img className={s.img} alt='bandera' src={props.img}></img>    
          <p className={s.p1}>{props.name}</p>
        </button>
    )
}