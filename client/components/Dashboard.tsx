import React from 'react'; 
import { Outlet } from 'react-router-dom'; 
import '../styles/dashboard.css';
import logo from '../assets/LinguaiLogo.png'; 


const Dashboard: React.FC = () => {

  return (
    <div className='dashboard-container'>
      <header className='navbar'>
        <img className='navbar-logo' src={logo} alt='Linguai Logo' style={{height:50, width:180}}></img>
        <nav className='navbar-links'>
          <a href='/home'>Home</a>
          <a href='/journals'>Journals</a>
          <a href='/calendar'>Calendar</a>
          <a href='/wordbank'>Word Bank</a>
          <a href='/account'>Account</a>
        </nav>
      </header>
      <main className='dashboard'>
        <Outlet />
      </main>
      <footer className='footer'>
        <p className='copyright-p'>&copy; 2025 Linguai</p>
      </footer>
    </div>
  )
}

export default Dashboard; 