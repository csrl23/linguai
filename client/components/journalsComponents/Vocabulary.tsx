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
  const [vocabEntries, setVocabEntries] = useState<VocabEntry[] | undefined>([{ word: 'Amour', lexCat: 'Noun', meaning: 'Love' }, { word: 'Amour', lexCat: 'Noun', meaning: 'Love' }, { word: 'Amour', lexCat: 'Noun', meaning: 'Love' },]); 
  const [openLexCatDropdown, setOpenLexCatDropdown] = useState<boolean>(false); 
  const [selectedLexCat, setSelectedLexCat] = useState<string | undefined>(undefined); 

  // [{ word: 'Amour', lexCat: 'Noun', meaning: 'Love' }, { word: 'Amour', lexCat: 'Noun', meaning: 'Love' }, { word: 'Amour', lexCat: 'Noun', meaning: 'Love' },]

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
        <div className='vocab-header'>
          <h2 className='vocab-h2'>📝 Vocabulary</h2>
          <div className='corner-btns'> 
            <button className='resize-comp-btn'>—</button>
            <button className='x-comp-btn'>x</button>
          </div>
        </div>
        <hr className='vocab-hr'></hr>
        <div className='vocab-main'>
          <table className='header-table'>
            <thead className='table-head'>
              <tr className='table-row'>
                <th className='table-header th-1'>Word</th>
                <th className='table-header th-2'>Lexical Category</th>
                <th className='table-header th-3'>Meaning</th>
                <th className='table-header th-4'></th>
              </tr>
            </thead>
          </table>
          <div className='scroll-body'>
            {vocabEntries !== undefined ? 
              <table className='body-table'>
                <tbody className='table-body'>
                  {vocabEntries.map((entry, index) => (
                    <tr className='table-row'>
                      <td className='table-data td-1'>{entry.word}</td>
                      <td className='table-data td-2'>{entry.lexCat}</td>
                      <td className='table-data td-3'>{entry.meaning}</td>
                      <td className='td-4'>
                        <div className='icons-div'>
                          <FontAwesomeIcon className='icon pencil' icon={faPencil} />
                          <FontAwesomeIcon className='icon trash' icon={faTrash} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              : 
              <div className='no-entries'>
                No entries recorded
              </div>
            }
          </div>
          <div className='input-div'>
            {/* <div className='input-container'> */}
            <input placeholder='Enter word' className='td-input td-i-1'></input>
            <div className='td-div'>
              <h4 className='td-h4'>{selectedLexCat || 'Select'}</h4>
              {/* <div className='td-div-2'> */}
              <button className='td-dropdown-btn' onClick={() => handleLexCatDropdown()}><FontAwesomeIcon icon={faAngleDown} /></button>
              {openLexCatDropdown && 
              <>
                <div className='td-dropdown-container'>
                  <ul className='td-dropdown'>
                    {lexicalCategories.map((category: string, index: number) => (
                      <li key={index} className='td-dropdown-item' onClick={() => handleSelectedLexCat(category)}>{category}</li>
                    ))}
                  </ul>
                </div>
              </>
              }
            </div>
            <input placeholder='Enter meaning' className='td-input td-i-2'></input>
            <div className='empty-div'></div>
          </div>
        </div>
        <div className='btn-div'>
          <button className='add-entry-btn'>Add Entry</button>
        </div>
      </section>
    </>
  )
}

export default Vocabulary; 