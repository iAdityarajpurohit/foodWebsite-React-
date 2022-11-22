import React from 'react'
import {Link, useNavigate} from 'react-router-dom';



 const MenuCard = ( { menuData } ) => {
    // console.log(menuData );
    const navigate = useNavigate();
    return (
        
        <>
      <section className='main-card--cointainer'>
      { menuData.map((currElm,index)=>{

        const {id, price, name,category,image,description} = currElm;

        
        const openOrderPage = (name) => {
            navigate("/newPage", {
              state: {
                name: name,
                image:image,
                amount:price
              }
            })
        }

              return(
                <React.Fragment key={id}>
                <div className='card-container'>
                <div className='card'>
                    <span className='card-number card-circle subtle'>{id}</span>
                    <span className='card-author subtle'>{category}</span>
                    <h2 className='card-title'>{name}</h2>
                    <span className='card-description subtle'>{description}</span>
                    <div className='card-read'>Read</div>
                </div>
                <img src={image}  alt="image" className='card-media'/>
                {/* <Link to={{pathname:"/newPage",state:{name: name}}} className='card-tag subtle'>Order Now</Link> */}
                {/* <button onClick= {() => openOrderPage(name)}> Order Now1</button> */}
                <span className='card-tag subtle' onClick= {() => openOrderPage(name)}  >Order Now</span>
            </div>
            </React.Fragment>
            )
        })
    }
    </section>
    </>
  
  )
}
export default MenuCard;