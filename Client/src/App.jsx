import './App.css'
import{BrowserRouter, Routes,Route} from 'react-router-dom'
import SignIn from './component/pages/SignIn'
import Home from './component/pages/Home'
import SignUp from './component/pages/SignUp'
import About from './component/pages/About'
import Profile from './component/pages/Profile'
import Header from './component/Header'
import PrivateRoute from './component/PrivateRoute'
import CreateListing from './component/pages/CreateListing'
import UpdateListing from './component/pages/updateListing'
function App() {
 

  return (
    <BrowserRouter>
     <Header/>
    <Routes>
  
    <Route path='/' element={<Home/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/signUp' element={<SignUp/>}/>
    <Route path='/about' element={<About/>}/>
    <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
           <Route path='/create-listing' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          /> 
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
