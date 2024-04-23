import React from 'react'
import { data } from './data.js'

import './Restuarents.css';
export default function Restuarents() {

    const [search, setSearch] = React.useState(data);
    function handleRating(e) { 
        const value = e.target.value;
        const filtered = data.filter((food) => {
            return food.rating >= value;
        });
        setSearch(filtered);
    }
   function handleChange(e) {
    const value = e.target.value;
    const filtered = data.filter((food) => {
        return food.name.toLowerCase().includes(value.toLowerCase().trim());
    });
    
    setSearch(filtered);
}
    return (
        <div className="container">
            <div className="search">
             <input type="text" placeholder='Search Restuarents' className="text-input" onChange={(e) => {
                handleChange(e);
                
            }} />
            <input type="number" placeholder="Minimum Rating" className="number-input" onChange={(e) => {
                handleRating(e);
            }}  /></div>
      <div className='list-container' >
         
          {search.map((food) => {
            return (
                <div key={food._id.$oid} className='list'>
                    
                <h1>{food.name}</h1>
                    <p>{food.address}</p>
                    <p>Rating:{food.rating}</p>

                    <div className="second">
                        <div><span class="material-symbols-outlined">
restaurant
                    </span>
                    
                            <p>{food.type_of_food}</p>
                            </div>
                        <a href={food.URL}>View Link</a>
                    </div>
              </div>
            )
          })
      }
    </div></div>
  )
    }
    
