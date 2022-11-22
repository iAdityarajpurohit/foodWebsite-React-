import React from 'react'
import Resturant from "./comonent/Basic/Resturant";
import UseState from './comonent/Hooks/useState';
import UseEffect from './comonent/Hooks/useEffect';
import UseReducer from './comonent/Hooks/useReducer';

import Todo from './comonent/Todo-react/todo';
import Temperatur from './comonent/weather/temperatur';
import Temp from './comonent/weather/temperatur';
import ColorPicker from './comonent/weather/colorPicker';
//
import NewPage from './comonent/Basic/newPage';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

const App = () => {


  
  return (
    
    <>
        {/* { < ColorPicker /> } */}
          {/* { < Temp />} */}

//       {< Todo />}
       

     {/* {< UseReducer />} */}
    {/* {< UseEffect />} */}
    {/* {< UseState />} */}
   <Router>
    <Routes>
    <Route exact path='/' element={< Resturant />}></Route>
    <Route exact path='/newPage' element={< NewPage />}>
    </Route>
     
    </Routes>
   </Router>

    </>
  )
};
export default App;
