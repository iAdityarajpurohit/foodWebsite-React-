import React, {useState , useEffect} from 'react';
import "./todo-style.css";
 
// get the localStorage data back 

const getLocalData = ()=>{
    const lists = localStorage.getItem("mytodoList");
    if(lists){
        return JSON.parse(lists);
    } else{
        return[];
    }
}


 const Todo = () => {
   
    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItem , setIsEditItem] = useState("");
    const [toggleButton , setToggleButton] = useState(false);
    // console.log("setInputData is " + setInputData);

    // add the item function 
    const addItem = () =>{
        console.log("call inputData " + inputdata);
        if(!inputdata){
            alert("plz fill the data")
        }
        else if(inputdata && toggleButton){
            setItems(
                items.map((curElem) =>{
                    if(curElem.id == isEditItem){

                        return{...curElem , name: inputdata}
                    }
                    return curElem;
                })
            );

            setInputData([]);
            setIsEditItem(null);
            setToggleButton(false);
        }
        else{
            const myNewInputData = {
                id :  new Date().getTime().toString(), 
                name: inputdata,
            }
            setItems([...items, myNewInputData])
    
           setInputData("");
        }
    }
      
    // Edit items

    const editItem = (index) =>{
        const item_todo_edited = items.find((curElem) => {
            return curElem.id === index;
        });

        setInputData(item_todo_edited.name);
        setIsEditItem(index);
        setToggleButton(true);
    }

// how to delte items section 

const deleteItem = (index) =>{
    console.log(index + " index no is");
    const updatedItems = items.filter((curElem) =>{
        return curElem.id != index;
    });
    console.log(updatedItems + " update item is ");
    setItems(updatedItems);
};

//   Remove all the section 

const removeAll = () =>{
    setItems([]);
}

//  Addding localStorage 
useEffect(() => {
    console.log("use effect called")
    localStorage.setItem("mytodoList", JSON.stringify(items));
}, [items])

  return (
    <>
    <div className="main-div">
        <div className="child-div">
            <figure>
                <img src="./image/todo.svg" alt="todo-logo" />
                <figcaption>Add Your List Here✌ </figcaption>
            </figure>
            <div className="add-Item">
                <input
                 type="text" placeholder='✍Text here' className='form-control' 
                value = { inputdata }
                onChange  = { (event) => setInputData(event.target.value) }
                />
    
               {toggleButton ? ( <i className='fa fa-edit add-btn' onClick={addItem} ></i> ) :  (
               <i className='fa fa-plus add-btn' onClick={addItem} ></i>
               )}

               
            </div>

             {/* show out item  */}
             <div className="showItems">
                  {items.map((curElem, index) => {
                    return(

                <div className='eachItem' key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i className='far fa-edit add-btn' onClick={() => editItem(curElem.id)} ></i>
                    <i className='far fa-trash-alt add-btn' onClick={() => deleteItem(curElem.id)} ></i>
                  </div>
                </div>
                    )
                  })}




             </div>


            {/* remove button tag */}
            <div className="showItem">
                <button className='btn effect04' data-sm-link-text="Remove" onClick={removeAll}>
                 <span> Check List   </span>
                </button>
            </div>
        </div>
    </div>
    </>
  )
}
export default Todo;