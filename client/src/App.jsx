import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-up' element={<Signup/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/profile' element={<Profile/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
