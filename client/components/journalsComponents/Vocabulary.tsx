import React, { useState,  useEffect } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash, faAngleDown } from '@fortawesome/free-solid-svg-icons';

// needed when database is created to map through vocab entries 
interface VocabEntry {
  word: string, 
  lexCat: string, 
  meaning: string, 
}

const Vocabulary: React.FC = () => {
  const [vocabEntries, setVocabEntries] = useState<VocabEntry[] | undefined>(undefined); 
  const [openLexCatDropdown, setOpenLexCatDropdown] = useState<boolean>(false); 
  const [selectedLexCat, setSelectedLexCat] = useState<string | undefined>(undefined); 

  
  const lexicalCategories: string[] = ['Noun', 'Verb', 'Adverb', 'Adjective', 'Pronoun', 'Interjection', 'Preposition', 'Conjunction', 'Other']; 

  const handleLexCatDropdown = () => {
    if (openLexCatDropdown) return setOpenLexCatDropdown(false); 
    else return setOpenLexCatDropdown(true); 
  }

  const handleSelectedLexCat = (category: string) => {
    setSelectedLexCat(category);
    setOpenLexCatDropdown(false);
  }; 

  return (
    <>
      <section className='vocab-section'>
        <header className='vocab-header'>
          <h2 className='vocab-h2'>📝 Vocabulary</h2>
          <section className='corner-btns'> 
            <button className='resize-comp-btn'>—</button>
            <button className='x-comp-btn'>x</button>
          </section>
        </header>
        <hr className='vocab-hr'></hr>
        <main className='vocab-main'>
          <table className='vocab-table'>
            <thead className='table-head'>
              <tr className='table-row'>
                <th className='table-header th-1'>Word</th>
                <th className='table-header th-2'>Lexical Category</th>
                <th className='table-header th-3'>Meaning</th>
                <th className='table-header th-4'></th>
              </tr>
            </thead>
            <tbody className='table-body'>
              <tr className='table-row'>
               <td className='table-data td-1'>Amour</td>
                <td className='table-data td-2'>Verb</td>
                <td className='table-data td-3'>Love</td>
                <td className='table-data td-4'>
                  <FontAwesomeIcon icon={faPencil} style={{fontSize: '10px', color: "#626364",}} />
                  <FontAwesomeIcon icon={faTrash} style={{fontSize: '10px', color: "#626364",}} />
                </td>
              </tr>
              <tr className='table-row'>
                <td className='table-data td-1'>Montagne</td>
                <td className='table-data td-2'>Noun</td>
                <td className='table-data td-3'>Mountain</td>
                <td className='table-data td-4'>
                  <FontAwesomeIcon icon={faPencil} style={{fontSize: '10px', color: "#626364",}} />
                  <FontAwesomeIcon icon={faTrash} style={{fontSize: '10px', color: "#626364",}} />
                </td>
              </tr>
            {/* <tr className='table-row'>
              <td className='table-data td-1'><input placeholder='Enter word' className='td-input td-i-1'></input></td>
              <td className='table-data td-2 '>
                <div className='td-div'>
                  <h4 className='td-h4'>{selectedLexCat || 'Select'}</h4>
                  <div className='td-div-2'>
                    <button className='td-dropdown-btn' onClick={() => handleLexCatDropdown()}><FontAwesomeIcon icon={faAngleDown} /></button>
                  </div>
                </div>
                {openLexCatDropdown && 
                <div className='td-dropdown-container'>
                  <ul className='td-dropdown'>
                    {lexicalCategories.map((category: string, index: number) => (
                      <li key={index} className='dropdown-item' onClick={() => handleSelectedLexCat(category)}>{category}</li>
                    ))}
                  </ul>
                </div>
                }
              </td>
              <td className='table-data td-3'><input placeholder='Enter meaning' className='td-input td-i-2'></input></td>
            </tr> */}
            </tbody>
          </table>
        </main>
        <div className='btn-div'>
          <button className='add-entry-btn'>Add Entry</button>
        </div>
      </section>
    </>
  )
}

export default Vocabulary; 