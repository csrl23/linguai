import React from 'react';
import './styles/app.css'; 
import SignIn from './components/SignIn'; 
import SignUp from './components/SignUp'; 

const App: React.FC = () => {

  
  return (
    <div className=''>
     <SignIn></SignIn>
     {/* <SignUp></SignUp> */}
    </div>
  ); 
}; 

export default App; 