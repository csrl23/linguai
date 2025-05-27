import React, { useState,  useEffect } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash, faAngleDown, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

// needed when database is created to map through vocab entries 
interface VocabEntry {
  word: string, 
  lexCat: string, 
  meaning: string, 
}

const Vocabulary: React.FC = () => {
  const [vocabEntries, setVocabEntries] = useState<VocabEntry[]>([]); 
  const [openLexCatDropdown, setOpenLexCatDropdown] = useState<boolean>(false); 
  const [selectedLexCat, setSelectedLexCat] = useState<string | undefined>(undefined); 
  const [wordEntered, setWordEntered] = useState<string>(''); 
  const [meaningEntered, setMeaningEntered] = useState<string>(''); 
  const [noLexCatSelected, setNoLexCatSelected] = useState<boolean>(false); 
  const [noWordEntered, setNoWordEntered] = useState<boolean>(false); 
  const [noMeaningEntered, setNoMeaningEntered] = useState<boolean>(false); 
  const [vocabEntryToEdit, setVocabEntryToEdit] = useState<VocabEntry | undefined>(undefined); 
  const [newVocabEntry, setNewVocabEntry] = useState<VocabEntry | undefined>(undefined); 
  const [editRequested, setEditRequested] = useState<boolean>(false); 
  const [indexToBeEdited, setIndexToBeEdited] = useState<number | undefined>(undefined); 
  const [editedWord, setEditedWord] = useState<string>('');
  const [editedLexCat, setEditedLexCat] = useState<string>('');
  const [editedMeaning, setEditedMeaning] = useState<string>('');


  const lexicalCategories: string[] = ['Noun', 'Verb', 'Adverb', 'Adjective', 'Pronoun', 'Interjection', 'Preposition', 'Conjunction', 'Other']; 

  useEffect (() => {
    console.log('This is the edited word');
  }, [editedWord]);


  const handleLexCatDropdown = () => {
    if (openLexCatDropdown) return setOpenLexCatDropdown(false); 
    else return setOpenLexCatDropdown(true); 
  };

  const handleSelectedLexCat = (category: string) => {
    setSelectedLexCat(category);
    setOpenLexCatDropdown(false);
  }; 

  // function to handle new vocab entry 
  const handleNewVocabEntry = (): void => {
    //! create components for warnings
    // check if all fields required for a vocab entry are completed. If they are not, show user warning
    // no word entered
    if (!wordEntered) return setNoWordEntered(true); 
    // no lex cat selected
    if (!selectedLexCat) return setNoLexCatSelected(true); 
    // no meaning entered
    if (!meaningEntered) return setNoMeaningEntered(true); 
      
    // if all fields are valid, initialize a variable to store all fields 
    const newVocabEntry: VocabEntry = {
      word: `${wordEntered}`, 
      lexCat: `${selectedLexCat}`, 
      meaning: `${meaningEntered}`, 
    };

    //! when database is built - send new vocab entry  


    // copy current vocab entries state and reset state to include new vocab entry 
    setVocabEntries([...vocabEntries, newVocabEntry]); 

    // reset all fields to an empty string
    setWordEntered(''); 
    setSelectedLexCat(undefined); 
    setMeaningEntered(''); 
  };

  // function to edit a vocab entry 
  const handleVocabEntryEdit = (entryIndex: number): void => {
    setIndexToBeEdited(entryIndex); 
    setEditRequested(true); 

    // const vocabEntry = {
    //   word: vocabEntries[entryIndex].word, 
    //   lexCat: vocabEntries[entryIndex].lexCat, 
    //   meaning: vocabEntries[entryIndex].meaning, 
    // }

    // setVocabEntryToEdit(vocabEntry); 
    setEditedWord(vocabEntries[entryIndex].word); 
    setEditedLexCat(vocabEntries[entryIndex].lexCat); 
    setEditedMeaning(vocabEntries[entryIndex].meaning); 
  };

  // function to delete a vocab entry 
  const handleVocabEntryDelete = (entryIndex:number): void => {
    // initialize variable to store updated vocab entries array 
    const updatedVocabEntries: VocabEntry[] = [...vocabEntries];
    const removedVocabEntry: VocabEntry[] = updatedVocabEntries.splice(entryIndex, 1);
    
    // set vocab entries state with updated variable 
    setVocabEntries(updatedVocabEntries); 
  };

  const handleEditedVocabEntry = () => {
    // check if all fields are complete. If not, display user warning
    if (!editedWord) {
      
    }

    // if they are all complete, replace previous vocab entry with newly edited vocab entry 



  };

  const displayVocabEntries = () => {

    return (
      vocabEntries.map((entry, index) => (
        <tr className='table-row' key={index}>
          <td className='table-data td-1'>{entry.word}</td>
          <td className='table-data td-2'>{entry.lexCat}</td>
          <td className='table-data td-3'>{entry.meaning}</td>
          <td className='td-4'>
            <div className='icons-div'>
              <FontAwesomeIcon className='icon pencil' icon={faPencil} onClick={() => handleVocabEntryEdit(index)}/>
              <FontAwesomeIcon className='icon trash' icon={faTrash} onClick={() => handleVocabEntryDelete(index)}/>
            </div>
          </td>
        </tr>
      ))
    )
  }

  const displayEditVocabEntries = () => {
    return (
      vocabEntries.map((entry, index) => {
        if (index === indexToBeEdited) {
          return (
            <tr className='table-row' key={index}>
            <td className='table-data td-1'><input className='edit-input' type='text' value={editedWord} onChange={(e) => setEditedWord(e.target.value)}></input></td>
            <td className='table-data td-2'><input className='edit-input' type='text' value={editedLexCat} onChange={(e) => setEditedLexCat(e.target.value)}></input></td>
            <td className='table-data td-3'><input className='edit-input' type='text' value={editedMeaning} onChange={(e) => setEditedMeaning(e.target.value)}></input></td>
            <td className='td-4'>
              <div className='icons-div'>
                <FontAwesomeIcon className='icon check' icon={faCircleCheck} onClick={() => handleEditedVocabEntry()}/>
              </div>
            </td>
          </tr>
          )
        } else {  
          return (
            <tr className='table-row' key={index}>
            <td className='table-data td-1'>{entry.word}</td>
            <td className='table-data td-2'>{entry.lexCat}</td>
            <td className='table-data td-3'>{entry.meaning}</td>
            <td className='td-4'>
              <div className='icons-div'>
                <FontAwesomeIcon className='icon pencil' icon={faPencil} onClick={() => handleVocabEntryEdit(index)}/>
                <FontAwesomeIcon className='icon trash' icon={faTrash} onClick={() => handleVocabEntryDelete(index)}/>
              </div>
            </td>
          </tr>
          )
        }
      })
    )
  }

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
            {vocabEntries.length > 0 ? 
              <table className='body-table'>
                <tbody className='table-body'>
                  {/* {editRequested ? displayEditVocabEntries() : displayVocabEntries()} */}
                  {displayEditVocabEntries()}
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
            <input placeholder='Enter word' className='td-input td-i-1' type='text' value={wordEntered} onChange={(e) => setWordEntered(e.target.value)}></input>
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
            <input placeholder='Enter meaning' className='td-input td-i-2' type='text' value={meaningEntered} onChange={(e) => setMeaningEntered(e.target.value)}></input>
            <div className='empty-div'></div>
          </div>
        </div>
        <div className='btn-div'>
          <button className='add-entry-btn' onClick={handleNewVocabEntry}>Add Entry</button>
        </div>
      </section>
    </>
  )
}

export default Vocabulary; 