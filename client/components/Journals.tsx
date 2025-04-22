import React from 'react'; 
import logo from '../assets/LinguaiLogo.png'; 
import '../styles/dashboard.css'; 

const Journals = () => {


  return (
    <div className='dashboard-container'>
      <header className='navbar'>
        <img className='navbar-logo' src={logo} alt='Linguai Logo' style={{height:50, width:180}}></img>
        <nav className='navbar-links'>
          <a href=''>Home</a>
          <a href=''>Journals</a>
          <a href=''>Calendar</a>
          <a href=''>Word Bank</a>
          <a href=''>Account</a>
        </nav>
      </header>
      <main className='dashboard'>
        <section className='journals-section'>
          <h1 className='section-title'>Language Journals</h1>
          <div className='section-list'>
            <button className='add-journal-btn'>+ New Journal</button>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <p className='copyright-p'>&copy; 2025 Linguai</p>
      </footer>
    </div>
  )
}

export default Journals; 