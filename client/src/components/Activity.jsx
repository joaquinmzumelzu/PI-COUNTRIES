//
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import s from '../styles/Activity.module.css'
import CardMini from './CardMini';
//

export default function Activity (){

    let allCountries = useSelector(state => state.allCountries);
    let sorted = [...allCountries].sort((a, b) => a.name.localeCompare(b.name))

    const [actCountries, setActCountries] = useState([])

    function handleCountries(e){
      e.preventDefault()
      let countrie = allCountries.find(c => c.name === e.target.value)
      
      let check = actCountries.find(c => c.name === countrie.name)
      if(check) return

      setActCountries([...actCountries, {name:countrie.name,img:countrie.img}])
    }
    
    function deleteLabel (e){
      e.preventDefault()
      setActCountries(actCountries.filter(c => c.name !== e.target.value ))
    }
    // useEffect(() => {
      

       
    // } 
    // ,[actCountries])

    return (
        <div className={s.div}>
          <form>

            <div className={s.name}>
              <p>Activity name</p>  
              <input></input>
              <p>llena este espacio amigo</p>
            </div>
            
            <div className={s.duration}>
              <p>Activity duration (minutes)</p>  
              <input></input>
              <p>llena este espacio amigo</p>
            </div>

            <div className={s.difficulty}>
              <select>
                <option disabled='' value="Select option">Select activity difficulty</option>
                <option value="1">1 - Easy</option>
                <option value="2">2 - Upper Easy</option>
                <option value="3">3 - Medium</option>
                <option value="4">4 - Advanced</option>
                <option value="5">5 - Pro</option>
              </select>
            </div>

            <div className={s.season}>
              <select>
              <option disabled='' value="Select option">Select activity season</option>
                <option value="Summer">Summer</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
                <option value="Autumn">Autumn</option>
                <option value="All the year">All the year</option>
              </select>
            </div>

            <div className={s.countries}>
              <select onChange={handleCountries}>
              <option disabled="" value="Select option">Select activity season</option>
                {sorted?.map(e => {
                    return <option key={e.name}>{e.name}</option>
                })}
              </select>
            </div>

            <div className={s.selectedCountries}>
              {actCountries?.map(e => {
                return <div>
                  <label>{e.name}</label>
                  <span>
                    <button onClick={deleteLabel} value={e.name} >X</button>
                  </span>
                </div>
              })}
            </div>

            <div>
                <button type='submit'>SUBMIT</button>
            </div>

          </form>
        </div>
    )
}