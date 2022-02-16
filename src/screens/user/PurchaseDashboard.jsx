import React from 'react'

export default function PurchaseDashboard({catList,setCount,index}) {
  return (
    <div>
        
        <p className='cp custom-sb' onClick={()=>{
          setCount(index)
        }}>{catList}</p>
       
    </div>
  )
}
