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

    function retornarH1(){
        return (
            <div>
              <h1>Activities</h1>  
            </div>
        )
    }

    function retornarNoActivities(){
        return (
            <h1>No Activities were found for this country</h1>
        )
    }

    function retornarDetails () {
        return (
        <div className={s.div}>

          <div className={s.img}>

            <img src={countryPK.img} alt='foto'></img>
          </div>

          <div className={s.Card}>
            <h1>{`${countryPK.name} (${countryPK.ID})`}</h1>
            <p>{`Perimeter : ${new Intl.NumberFormat().format(countryPK.area)} kms²`}</p>
            <p>{`${countryPK.continent} (${countryPK.subRegion})`}</p>
            <p>{`${countryPK.capitalCity}`}</p>
            <p>{`Population : ${new Intl.NumberFormat().format(countryPK.population)}`}</p>
          </div>

          <div className={s.activities}>
            {countryPK.atractives.length && retornarH1()}
            {!countryPK.atractives.length && retornarNoActivities()}
            {countryPK.atractives && countryPK.atractives?.map(e => {
                return <p>{e.name}</p>
            })}
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