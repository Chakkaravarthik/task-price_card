
import { useState } from 'react'
import './App.css'
import data from './localdata';

function App() {

  
  return (
    <>
      
      <div className="Box-main">
        {data.map((val,idx)=>(
        <PriceCard model={val} key={idx}/>
        
        ))}
        
      </div>
    </>
  )
}

function PriceCard({model}){
  const [show, Setshow] =useState(true);
  const tickmark = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
  const crossmark = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
  <path d="M18 6L6 18M6 6l12 12"/>
</svg>
  
    return(
    <div className="Price-card">
      <p >{model.too.type}</p>
      <p><span>{tickmark}</span>{model.too.user.noofuser}</p>
      <p><span>{tickmark}</span>{model.too.Storage.quantityStorage}</p>
      <p className={model.too.access.style}><span>{tickmark}</span>{model.too.access.limit}</p>
      <p className={model.too.subdomain.style}><span>{tickmark}</span>{model.too.subdomain.limit}</p>
      {show ? <button className="btn" onClick={()=>Setshow(!show)}>Buy</button> :<button className="btn" onClick={()=>Setshow(!show)}>Remove</button>}
     
    </div>
   )
}

function ProductCounter(){
  const [count,Setcount]= useState(0);
  return(
    <div>
      <h1>count : {count}</h1>
      <button className='btn' onClick={()=>Setcount(count + 1)}>Add</button>
    </div>

  )
}


export default App
