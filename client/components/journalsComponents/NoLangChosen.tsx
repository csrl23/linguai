import React, { useState, useEffect } from 'react';
import '../../styles/journals.css'; 

interface ChildProps {
  onNoLangStateChange: (newState: boolean) => void, 
}

const NoLangChosen: React.FC<ChildProps> = ({ onNoLangStateChange }) => {

//   const [closeError, setCloseError] = useState<boolean>(false); 

  const closeErrorPopup = () => {
    onNoLangStateChange(true); 
  }

  return (
    <>
      <section className='no-lang-chosen-container'>
        <div>
        </div>
        <div>

        </div>
      </section>
    </>
  )
}; 

export default NoLangChosen; 
