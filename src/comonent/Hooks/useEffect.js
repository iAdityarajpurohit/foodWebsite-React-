import React, { useEffect, useState } from 'react'
import "./style1.css"

 const UseEffect = () => {
  const initialData = 0;

 const[myNum,setMyNum] =   useState(initialData);

  useEffect(()=>{
    console.log("HI");
    document.title = `chat(${myNum})`
  });

  return (
    <>
    <div className='center-div'>

   <p className='p'>{myNum}</p>
   <div className='button2' onClick={() => setMyNum(myNum + 1)}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    INCR
   
   </div>
   
    </div>
    </>
  )
}
export default UseEffect;
