import React from 'react'

 const Navbar = ({filterItem, menuList}) => {
  return (
    <>
           <nav className='navbar'>
            <div className="btn-group">
                {
                    menuList.map((currElm,index)=>{
                   return(  
                   
                   <button key={index} className="btn-group__item" onClick={() => filterItem(currElm)} >{currElm}</button>)
                    })
                }
            </div>
        </nav>
    </>
  )
}
export default Navbar;