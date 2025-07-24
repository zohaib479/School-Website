import React from 'react'
import './k.css'
const Choose = (props) => {
  return (
    <div className='ma'>
      <div className='r   mt-5'>
        <div className='p'> 
      <i class={`fa-solid ${props.ico} fa-xl `} style={{color: 'white'}}></i>
        </div>
     </div>
     <h2 className='text-center mt-3 text-xl text-white font-bold'> {props.title}</h2>
     <li className='ml-3 mt-2 text-black'>{props.text}</li>
    </div>
  )
}

export default Choose
