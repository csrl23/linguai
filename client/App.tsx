import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/app.css'; 
import Dashboard from './components/Dashboard'; 
import SignIn from './components/SignIn'; 
import SignUp from './components/SignUp'; 
import Home from './components/Home';
import Journals from './components/Journals'; 
// import Calendar from './components/Calendar'; 
// import WordBank from './components/WordBank'; 
// import Account from './components/Account'; 

const App: React.FC = () => {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/' element={<Dashboard />}>
          <Route path='/home' element={<Home />}/>
          <Route path='/journals' element={<Journals />}/>
          {/* <Route path='/calendar' element={<Calendar />}/> */}
          {/* <Route path='/wordbank' element={<WordBank />}/> */}
          {/* <Route path='/account' element={<Account />}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  ); 
}; 

export default App; 