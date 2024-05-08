import './App.css'
import{BrowserRouter, Routes,Route} from 'react-router-dom'
import SignIn from './component/pages/SignIn'
import Home from './component/pages/Home'
import SignUp from './component/pages/SignUp'
import About from './component/pages/About'
import Profile from './component/pages/Profile'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signIn' element={<SignIn/>}/>
    <Route path='/signUp' element={<SignUp/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
