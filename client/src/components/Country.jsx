//

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getByPK } from '../redux/actions';
import s from '../styles/Country.module.css'

//

export default function Country(props){
    const params = useParams()
    const dispatch = useDispatch();
    const countryPK = useSelector(state => state.countryPK)
    const dificultades = [null,'Easy', 'Upper Easy', 'Medium', 'Advanced', 'Pro']

    function retornarH1(){
        return (
            <div>
              <h1 className={s.h1}>Activities</h1>  
            </div>
        )
    }

    function retornarNoActivities(){
        return (
            <h1 className={s.text}>No Activities were found for this country</h1>
        )
    }

    function retornarDetails () {
        return (
        <div className={s.div}>

          <div className={s.prueba}>
            

          <div className={s.img}>
            <h1 className={s.text}>Country Details...</h1>
            
            <img className={s.imgContainer} src={countryPK.img} alt='foto'></img>

            
          </div>

          <div className={s.Card}>
            <h1 className={s.textTitle}>{`${countryPK.name} (${countryPK.ID})`}</h1>
            <p className={s.textGeneric}>{`Perimeter : ${new Intl.NumberFormat().format(countryPK.area)} kms²`}</p>
            <p className={s.textGeneric}>{`${countryPK.continent} (${countryPK.subRegion})`}</p>
            <p className={s.textGeneric} >{`${countryPK.capitalCity}`}</p>
            <p className={s.textGeneric}>{`Population : ${new Intl.NumberFormat().format(countryPK.population)}`}</p>
          </div>

          </div>
          <div className={s.activities}>
            {!!countryPK.atractives.length &&  retornarH1()}
            {!countryPK.atractives.length && retornarNoActivities()}
            <div className={s.container}>

            {countryPK.atractives && countryPK.atractives?.map(e => {
              return <div className={s.miniCard}>
                  <p className={s.textName}>{e.name}</p>
                  <p className={s.textGeneric}>{`Difficulty: ${e.difficulty}-${dificultades[e.difficulty]}`}</p>
                  <p className={s.textGeneric}>{`${e.duration} minutes`}</p>
                  <p className={s.textGeneric}>{`Season: ${e.season[0].toUpperCase() + e.season.slice(1)}`}</p>
                  </div>
            })}
            </div>
          </div>

        </div>
        
        )
    }
    
    useEffect(() => {
      dispatch(getByPK(params.id))

    },[Country])

    return (
        <div className={s.div}>
        
        {countryPK.name && retornarDetails()}
         
        </div>
    )
}