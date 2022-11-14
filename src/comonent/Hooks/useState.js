import React from 'react'
import "./style1.css"

 const useState = () => {
  const initialData = 0;

 const[myNum,setMyNum] =  React.useState(initialData);


 console.log(myNum);
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
   <div className='button2' onClick={() => myNum > 0 ? setMyNum(myNum - 1) : myNum(0)}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
   DECR
   </div>
    </div>
    </>
  )
}
export default useState;
