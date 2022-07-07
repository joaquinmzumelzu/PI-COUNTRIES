//
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import s from '../styles/FormPagination.module.css'
//

export default function FormPagination (){
    
    const [current, setCurrent] = useState(0)
    const [currentPage, setCurrentPage] = useState([])
    const formCountries = useSelector(state => state.formCountries)

  
    
    function agregarUno(){
        if(!formCountries[(current * 8) + 8]) return 
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
        let current2 = (current * 8) + 8
        while(formCountries[current2]){
          current2 = current2 + 8
        }
        current2 = Math.ceil((current2 - 8) /8)
        setCurrent(current2)
    }

    useEffect(() => {
      setCurrentPage(formCountries.slice((current * 8), 8 + (current * 8)))
    }, [current,formCountries])

    // useEffect (() => {  
    //   setCurrent(0)
    // }, [filter])

    // useEffect(() => {
      
    // }, [])

    return (
        <div className={s.divv}>

            <div className={s.nav}>
           
              <button className={s.button} onClick={irALaPrimeraPagina}>{'|<<'}</button>
              <button className={s.button} onClick={restarUno}>{'<'}</button>

              <div className={s.current}>
                <p>{current + 1}</p>
              </div>

              <button className={s.button} onClick={agregarUno}>{'>'}</button>
              <button className={s.button} onClick={irALaUltimaPagina}>{'>>|'}</button>
             
            </div>

            <div className={s.page}>
              {currentPage?.map(e => {
                return <div className={s.cardMini}>

                           <button  value={e.name} className={s.cardMiniButton}>X
                           </button>
                           <img className={s.cardMiniImg} alt='bandera' src={e.img}></img>    
                           <p className={s.cardMiniP1}>{e.name}</p>
              </div>
              }) }
            </div>
         
        </div>
    )
}