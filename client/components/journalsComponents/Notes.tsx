import React from 'react'; 

const Notes: React.FC = () => {

  return (
    <>
      <section className='notes-section'>
        <header className='notes-header'>
          <h2 className='notes-h2'>📓 Notes</h2>
          <section className='corner-btns'> 
            <button className='resize-comp-btn'>—</button>
            <button className='x-comp-btn'>x</button>
          </section>
        </header>
        <main className='notes-main'>
          <textarea className='notes-area'></textarea>
        </main>
      </section>
    </>
  )
}

export default Notes; 