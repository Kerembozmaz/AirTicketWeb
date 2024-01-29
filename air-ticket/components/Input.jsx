import React from 'react'

export default function Input({head,location,type}) {
  return (
    <div className='h-fit'>
    <h3 className='m-1 text-slate-400' >{head}</h3>
    <h1 className='m-1 text-slate-800 whitespace-nowrap'>{location}</h1>
    
    </div>
  )
}
