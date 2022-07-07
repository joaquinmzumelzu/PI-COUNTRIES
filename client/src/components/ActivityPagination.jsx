//
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import s from '../styles/ActivityPagination.module.css'
//

export default function ActivityPagination (){
    
    const dificultades = [null,'Easy', 'Upper Easy', 'Medium', 'Advanced', 'Pro']
    const [current, setCurrent] = useState(0)
    const [currentPage, setCurrentPage] = useState([])
    // const max = 9
    const countryPK = useSelector(state => state.countryPK)
    // const activitiesPerPage = 4
  
    
    function agregarUno(){
        if(!countryPK.atractives[(current * 4) + 4]) return 
        setCurrent(current + 1)
    }

    function restarUno(){
        if(current === 0) return
        setCurrent(current -1 )
    }

    function irALaPrimeraPagina(){
        setCurrent(0)
    }

    function irALaUltimaPagina(){
        let current2 = (current * 4) + 4
        while(countryPK.atractives[current2]){
          current2 = current2 + 4
        }
        current2 = Math.ceil((current2 - 4) /4)
        setCurrent(current2)
    }

    useEffect(() => {
      setCurrentPage(countryPK.atractives.slice((current * 4), 4 + (current * 4)))
    }, [current,countryPK])

    // useEffect (() => {  
    //   setCurrent(0)
    // }, [filter])

    // useEffect(() => {
      
    // }, [])

    return (
        <div className={s.div}>

            <div className={s.nav}>
              {/* {current !== 0 && retornarBoton()}   */}
              <button className={s.button} onClick={irALaPrimeraPagina}>{'|<<'}</button>
              <button className={s.button} onClick={restarUno}>{'<'}</button>

              <div className={s.current}>
                <p>{current + 1}</p>
              </div>

              <button className={s.button} onClick={agregarUno}>{'>'}</button>
              <button className={s.button} onClick={irALaUltimaPagina}>{'>>|'}</button>
              {/* {filterCountries[(current * 10) + 10] && retornarBoton2()} */}
            </div>

            <div className={s.page}>
              {currentPage?.map(e => {
                return <div className={s.miniCard}>
                <p className={s.textName}>{e.name}</p>
                <p className={s.textGeneric}>{`Difficulty: ${e.difficulty}-${dificultades[e.difficulty]}`}</p>
                <p className={s.textGeneric}>{`${e.duration} minutes`}</p>
                <p className={s.textGeneric}>{`Season: ${e.season[0].toUpperCase() + e.season.slice(1)}`}</p>
                </div>
              }) }
            </div>
         
        </div>
    )
}