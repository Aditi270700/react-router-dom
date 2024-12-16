import  About from './About';
import Home from './Home'
import Navbar from './Navbar';
import {Routes,Route} from 'react-router-dom';


function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<About/>}/>
      </Routes>
      <Navbar/>
      <Home/>
        </>
  )
}

export default App
