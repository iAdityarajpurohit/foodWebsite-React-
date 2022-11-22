import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useLocation} from "react-router-dom";
import "./style.css";

import {useNavigate} from 'react-router-dom';


const NewPage = ({menuData}) => {
     const[counter,setCounter] = useState(1);
    console.log("menudata si ", menuData);
    const location = useLocation();
    console.log("location:: ", location);

    
    // Remove data all and go to home page
    const Navigate = useNavigate();
    const removeOrderPage = () => {
        Navigate("/")
    }
    if(counter === 0 ){
        Navigate("/")
    }
  return (
     <>
  
       <div >
        <img className='cart-Item'  src="image/cart.jpg" alt="" />
         </div>
         <div className='counter'>
        <h3>{counter}</h3>
     </div>
      <div>
       <Card style={{ width: '28rem' }}>
      <Card.Img style={{width:"22rem",height:"15rem"}} variant="top" src={location.state.image} />
      <Card.Body>
        <Card.Title>{location.state.name}</Card.Title>
        <Card.Title>{location.state.amount}</Card.Title>
        
        <button onClick={()=>setCounter(counter+1)} className='buton1'>Add</button>
        <button onClick={()=>setCounter(counter-1)} className='buton2'>Delete</button>
        <Button onClick= {() => removeOrderPage(counter)} variant="primary">Remove</Button>
        
        
      </Card.Body>
    </Card>
    </div>
    {/* ================== */}
 
       
     </>
  )
}


export default NewPage;