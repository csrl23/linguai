import React, { useState, useEffect } from 'react';
import '../styles/journals.css'; 

// interface for properties in the selected language object
interface DropdownLang {
  key: number,
  language: string, 
  emoji: string, 
  journalName: string,
}

// interface for props being passed down from the parent popup component
interface ChildProps {
  // prop to update dropdown state 
  onDropdownStateChange: (newState: boolean) => void; 
  // prop to update selected language state 
  onSelectedLangStateChange: (newState: string) => void; 
}

const LangDropdown: React.FC<ChildProps> = ({ onDropdownStateChange, onSelectedLangStateChange }) => {
  
  const [chosenLanguage, setChosenLanguage] = useState<string>(''); 

  // preset language title combos to map when dropdown is opened
  const languages = [
    {key: 1, language: ' French', emoji: '🇫🇷', journalName: ' Français'},
    {key: 2, language: ' Korean', emoji: '🇰🇷', journalName: ' 한국어'},
    {key: 3, language: ' Mandarin', emoji: '🇨🇳', journalName: ' 普通话'},
    {key: 4, language: ' Spanish', emoji: '🇪🇸', journalName: ' Español'},
    {key: 5, language: ' Italian', emoji: '🇮🇹', journalName: ' Italiano'},
    {key: 6, language: ' Japanese', emoji: '🇯🇵', journalName: ' 日本語'},
    {key: 7, language: ' German', emoji: '🇩🇪', journalName: ' Deutsch'},
    {key: 8, language: ' Portuguese', emoji: '🇵🇹', journalName: ' Português'},
    {key: 9, language: ' Russian', emoji: '🇷🇺', journalName: ' Русский'},
    {key: 10, language: ' Arabic', emoji: '🇦🇪', journalName: ' العربية'},
    {key: 11, language: ' Hindi', emoji: '🇮🇳', journalName: ' हिन्दी'},
    {key: 12, language: ' Turkish', emoji: '🇹🇷', journalName: ' Türkçe'},
    {key: 13, language: ' Dutch', emoji: '🇳🇱', journalName: ' Nederlands'},
    {key: 14, language: ' Swedish', emoji: '🇸🇪', journalName: ' Svenska'},
    {key: 15, language: ' Greek', emoji: '🇬🇷', journalName: ' Ελληνικά'},
    {key: 16, language: ' Polish', emoji: '🇵🇱', journalName: ' Polski'},
    {key: 17, language: ' Vietnamese', emoji: '🇻🇳', journalName: ' Tiếng Việt'},
    {key: 18, language: ' Hebrew', emoji: '🇵🇸', journalName: ' עברית'},
    {key: 19, language: ' Thai', emoji: '🇹🇭', journalName: ' ไทย'},
    {key: 20, language: ' Norwegian', emoji: '🇳🇴', journalName: ' Norsk'}
  ]
  
  // function to update state of dropdown component and selected language in parent popup component
  const handleChange = (chosenLanguage: DropdownLang) : void => {
    // set up name of journal (emoji + native language name)
    const finalLanguageLabel: string = `${chosenLanguage.emoji}${chosenLanguage.journalName}`; 
    // console.log(finalLanguageLabel);
    onSelectedLangStateChange(finalLanguageLabel); 
    onDropdownStateChange(false); 
  }

  return (
    <>
      <div className='dropdown-container'>
        <ul className='dropdown'>
          {languages.map((language: DropdownLang) => (
           <li key={language.key} className='dropdown-item' onClick={() => handleChange(language)}>
             {language.emoji}{language.language}
           </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default LangDropdown; 