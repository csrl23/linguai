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
      <section className='journal-section'>
        <header className='journal-header'>
          <h2 className='journal-h2'>📝 Vocabulary</h2>
          <section className='corner-btns'> 
            <button className='resize-comp-btn'>—</button>
            <button className='x-comp-btn'>x</button>
          </section>
        </header>
        <hr></hr>
        <main className='journal-main'>
          <table>
            <tr>
              <th>Word</th>
              <th>Lexical Category</th>
              <th>Meaning</th>
              <th></th>
            </tr>
            <tr>
              <td>Amour</td>
              <td>Verb</td>
              <td>Love</td>
              <td>
                <FontAwesomeIcon icon={faPencil} style={{color: "#626364",}} />
                <FontAwesomeIcon icon={faTrash} style={{color: "#626364",}} />
              </td>
            </tr>
            <tr>
              <td>Montagne</td>
              <td>Noun</td>
              <td>Mountain</td>
              <td>
                <FontAwesomeIcon icon={faPencil} style={{color: "#626364",}} />
                <FontAwesomeIcon icon={faTrash} style={{color: "#626364",}} />
              </td>
            </tr>
            <tr>
              <td><input placeholder='Enter word'></input></td>
              <td>
                <div>
                  <h4>{selectedLexCat || 'Select'}</h4>
                  <div>
                    <button onClick={() => handleLexCatDropdown()}><FontAwesomeIcon icon={faAngleDown} /></button>
                  </div>
                </div>
                {openLexCatDropdown && 
                <div>
                  <ul>
                    {lexicalCategories.map((category: string, index: number) => (
                      <li key={index} className='lex=cat-item' onClick={() => handleSelectedLexCat(category)}>{category}</li>
                    ))}
                  </ul>
                </div>
                }
              </td>
              <td><input placeholder='Enter meaning'></input></td>
            </tr>
          </table>

        </main>
      </section>
    </>
  )
}

export default Vocabulary; 