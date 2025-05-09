import React from 'react'; 

const Journal: React.FC = () => {

  return (
    <>
      <section className='journal-section'>
        <header className='journal-header'>
          <h2 className='journal-h2'>💌 Journal</h2>
          <section className='corner-btns'> 
            <button className='resize-comp-btn'>—</button>
            <button className='x-comp-btn'>x</button>
          </section>
        </header>
        <main className='journal-main'>
          <textarea className='journal-area'></textarea>
        </main>
      </section>
    </>
  )
}

export default Journal; 