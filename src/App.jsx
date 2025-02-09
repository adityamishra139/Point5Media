import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Services from './pages/Services'; // Ensure the correct path
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import About from './pages/About'
import Contact from './pages/Contact';


function App() {
 

  return (
    <>
    <BrowserRouter>
    
    
    <Routes>
    
    <Route path='/' element={<Landingpage></Landingpage>}/>
    <Route path='/services' element={<Services></Services>}/>
    <Route path='/contact' element={<Contact></Contact>}/>
    <Route path='/about' element={<About></About>}/>

  
     




    </Routes>
    
    
    </BrowserRouter>
    {/* <Signin></Signin> */}
    {/* <Signup></Signup> */}
    {/* <About></About> */}
    {/* <Contact></Contact> */}
      
    </>
  )
}

export default App
