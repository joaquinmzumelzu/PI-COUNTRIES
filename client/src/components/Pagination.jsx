//
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import s from '../styles/Pagination.module.css'
import Card from './Card'
//

export default function Pagination (){
    const filter = useSelector(state => state.filter)

    const [current, setCurrent] = useState(0)
    const [currentPage, setCurrentPage] = useState([])
    const max = 9
    const filterCountries = useSelector(state => state.filterCountries)
    const countriesPerPage = 10
  
    
    function agregarUno(){
        if(!filterCountries[(current * 10) + 10]) return 
        setCurrent(current + 1)
    }

    function restarUno(){
        if(current === 0) return
        setCurrent(current -1 )
    }

    function retornarBoton(val){
        return (
        <button className={s.button} onClick={irALaPrimeraPagina}>{'|<<'}</button>
        
        )
    }

    function retornarBoton2(val){
        return (
        <button className={s.button} onClick={irALaUltimaPagina}>{'>>|'}</button>
        
        )
    }

    function irALaPrimeraPagina(){
        setCurrent(0)
    }

    function irALaUltimaPagina(){
        let current2 = (current * 10) + 10
        while(filterCountries[current2]){
          current2 = current2 + 10
        }
        current2 = Math.ceil((current2 - 10) /10)
        setCurrent(current2)
    }

    useEffect(() => {
      setCurrentPage(filterCountries.slice((current * 10), max + 1+ (current * 10)))
    }, [current,filterCountries])

    useEffect (() => {  
      setCurrent(0)
    }, [filter])

    useEffect(() => {
      
    }, [])

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
                return <Card id={e.ID} continent={e.continent} name={e.name} img={e.img}/>
              }) }
            </div>
         
        </div>
    )
}