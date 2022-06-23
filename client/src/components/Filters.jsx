//
import s from '../styles/Filters.module.css'
//

export default function Filters (props){
    
    return (
        <div className={s.div}>

            <div className={s.form}>
              <p>Country name</p>
              <form>
                <input></input>    
                <button type='submit'>search</button>  
              </form> 
            </div>


            <div className={s.orderBy}>
              <p>Order by</p>
              <select>

                <option>Alphabetically</option>
                <option>By population</option>

              </select>
            </div> 


            <div className={s.filterBy}>
              <p>Filter by :</p>

              <div className={s.filters2}>
              <div className={s.fContinents}>
                <p>Continents</p>
                <input key='Antartica'type='checkbox'></input>Antartica<br/>
                <input key='Africa'type='checkbox'></input>Africa<br/>
                <input key='Asia'type='checkbox'></input>Asia<br/>
                <input key='Europe'type='checkbox'></input>Europe<br/>
                <input key='North America'type='checkbox'></input>North America<br/>
                <input key='Oceania'type='checkbox'></input>Oceania<br/>
                <input key='South America'type='checkbox'></input>South America<br/>
                
              </div>

              <div className={s.fActivities}>
                <p>Activities</p>
                <select>
                  {/* aqui iria un map con las actividades */}
                  <option>soccer</option>
                  <option>basquetball</option>

                </select> 
              </div>

              </div>
            

            </div>

        </div>
    )
}