import s from '../styles/Card.module.css'
//

export default function CardMini (props){
    
    return (
        <div className={s.div}> 
            {/* <div className={s.divImg}> */}
              <button>X</button>
              <img className={s.img} alt='bandera' src={props.img}></img> 
            {/* </div> */}
          <p className={s.p1}>{props.name}</p>
        </div>
    )
}