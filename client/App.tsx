import React from 'react';
import './styles/app.css'; 
import SignIn from './components/SignIn'; 
import SignUp from './components/SignUp'; 
import Home from './components/Home';
import Journals from './components/Journals'; 

const App: React.FC = () => {

  
  return (
    <div className=''>
     {/* <SignIn></SignIn> */}
     {/* <SignUp></SignUp> */}
     <Journals></Journals>
    </div>
  ); 
}; 

export default App; 