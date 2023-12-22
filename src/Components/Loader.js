import React from 'react'


export default function Loader(props) {
 
    return (
    <div>
      <div className='two'>
        <img src={props.value2.flags.png} alt="" /> 
        <h5>Name: {props.value2.name.common}</h5> 
        <p>Population: {props.value2.population}</p> 
        <p>Capital:{props.value2.capital}</p> 
        <p>Area: {props.value2.name.common}</p>
        <button onClick={()=>{ props.value3(props.value2.name.common)}}>Remove Country</button>
      </div>
    </div>
  )
}
