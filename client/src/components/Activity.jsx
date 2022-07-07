//
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import s from '../styles/Activity.module.css'

import axios from 'axios';
import { useDispatch } from 'react-redux';
import {  getAllActivities, getAllActivitiesCountries,getCountries} from '../redux/actions';


//

export default function Activity (props){
    const dispatch = useDispatch()
    console.log(props)
    let allCountries = useSelector(state => state.allCountries);
    let sorted = [...allCountries].sort((a, b) => a.name.localeCompare(b.name))

    const [actCountries, setActCountries] = useState([])
    const [form, setForm] = useState({
      name : '',
      duration: '',
      difficulty: 'Select option',
      season: 'Select option',
      countries: [],
      countriesSelect:'Select option' 
    })
    
    // const[errors,setErrors] = useState({})

    // const allActivities = useSelector(state => state.allActivities)

//-------------------------------------------------------------------------------
    function nameToState(e){
      e.preventDefault()
      setForm({...form,name:e.target.value.replace(/[^a-zA-ZñÑ\s]/gi, '')})
    }

    function durationToState(e){
      e.preventDefault()
      setForm({...form,duration:Number(e.target.value.replace(/\D/g, ''))})
    }

    function difficultyToState(e){
      e.preventDefault()
      setForm({...form, difficulty:Number(e.target.value)})
    }

    function seasonToState(e){
      e.preventDefault()
      setForm({...form, season:e.target.value.toLowerCase()})
    }

//-------------------------------------------------------------------------------    


      function handleCountries(e){
      e.preventDefault()
      let countrie = allCountries.find(c => c.name === e.target.value)
      
      let check = actCountries.find(c => c.name === countrie.name)
      if(check) return

      setActCountries([...actCountries, {name:countrie.name, id: countrie.ID, img: countrie.img}]) 
      setForm({...form, countries:[...form.countries,{name:countrie.name, id: countrie.ID}],countriesSelect: e.target.value })
      // setForm({...form, countriesSelect: e.target.value})
    }
    
    function deleteLabel (e){
      e.preventDefault()
      setActCountries(actCountries.filter(c => c.name !== e.target.value ))
      setForm({...form,countries: form.countries.filter(c => c.name !== e.target.value )})
     
    }

 //-------------------------------------------------------------------------------   
    function resetForm(){
      setForm({
        name : '',
        duration: '',
        difficulty: 'Select option',
        season: 'Select option',
        countries: [],
        countriesSelect: 'Select option' 
      })
      setActCountries([])
    } 

    function validate(){
      let errors = []
      if(!form.name) errors.push('Activity name is required');
      if(!form.duration) errors.push('Activity duration is required');
      if(!form.difficulty || form.difficulty === 'Select option') errors.push('Activity difficulty is required');
      if(!form.season || form.season === 'Select option') errors.push('Activity season is required');
      if(!form.countries.length) errors.push('At least 1 countrie is required');
      
      return errors;
    }

    async function postear (e) {
      e.preventDefault();
      let val = validate(); 
      val = val.join('\n')
      if(val) return alert(val)
      let obj = {...form}
      
     await axios.post('http://localhost:3001/activities', obj)
      .then(function (response) {
        alert('activity were added succesfully');
      })
      .catch(function (error) {
        console.log(error);
      });
      
      dispatch(getAllActivities())
      dispatch(getAllActivitiesCountries())
      resetForm()

      
    }
    //-------------------------------------------------------------------------
    //PAGINADOOOOOOOOOOOOO

    const [current, setCurrent] = useState(0)
    const [currentPage, setCurrentPage] = useState([])
 

  
    
    function agregarUno(){
        if(!actCountries[(current * 8) + 8]) return 
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
        while(actCountries[current2]){
          current2 = current2 + 8
        }
        current2 = Math.ceil((current2 - 8) /8)
        setCurrent(current2)
    }

    useEffect(() => {
      setCurrentPage(actCountries.slice((current * 8), 8 + (current * 8)))
    }, [current,actCountries])
// ---------------------------------------------------------------------------------
  function retornarPaginado() {
    
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

                         <button onClick={deleteLabel} value={e.name} className={s.cardMiniButton}>X
                         </button>
                         <img className={s.cardMiniImg} alt='bandera' src={e.img}></img>    
                         <p className={s.cardMiniP1}>{e.name}</p>
            </div>
            }) }
          </div>
       
      </div>
  )
  }



//----------------------------------------------------------------------------------


    useEffect(() => {
      if(!allCountries.length) dispatch(getCountries())
    },[dispatch, allCountries.length])


    return (
        <div className={s.div}>

          <div className={s.form}>
            
          
          <form onSubmit={postear}>

            <div className={s.name}>
              <p className={s.p}>Activity name</p>  
              <input className={s.input} value={form.name} onChange={nameToState} type='text' required ></input>
            </div>
            
            <div className={s.duration}>
              <p className={s.p}>Activity duration (minutes)</p>  
              <input className={s.input} value={form.duration} onChange={durationToState} type='text' required ></input>
            </div>

            <div className={s.difficulty}>
              <select value={form.difficulty} className={s.options} defaultValue="Select option" onChange={difficultyToState}>
                <option disabled value="Select option">Select activity difficulty</option>
                <option value="1">1 - Easy</option>
                <option value="2">2 - Upper Easy</option>
                <option value="3">3 - Medium</option>
                <option value="4">4 - Advanced</option>
                <option value="5">5 - Pro</option>
              </select>
            </div>

            <div className={s.season}>
              <select value={form.season} className={s.options} defaultValue="Select option" onChange={seasonToState}>
              <option disabled value="Select option">Select activity season</option>
                <option value="Summer">Summer</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
                <option value="Autumn">Autumn</option>
                <option value="All the year">All the year</option>
              </select>
            </div>

            <div className={s.countries}>
              <select value={form.countriesSelect} className={s.options} defaultValue="Select option" onChange={handleCountries}>
              <option disabled value="Select option">Select countries</option>
                {sorted?.map(e => {
                    return <option key={e.name}>{e.name}</option>
                })}
              </select>
            </div>

            <div className={s.selectedCountries}>
     
            </div>

            <div>
                <button className={`${s.options}`} type='submit'>SUBMIT</button>
            </div>

          </form>
          
          </div>

          <div className={s.container}>
         
            {!!actCountries.length && retornarPaginado()}

          </div>
          
        </div>
    )
}