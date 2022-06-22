import s from '../styles/Card.module.css'
//

export default function Card (props){
    
    return (
        <div className={s.div}>
            {/* <div className={s.divImg}> */}
              <img className={s.img} alt='bandera' src={props.img}></img> 
            {/* </div> */}
          <p className={s.p1}>{props.name}</p>
          <p>{props.continent}</p>
        </div>
    )
}