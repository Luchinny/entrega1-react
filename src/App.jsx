import { useState } from 'react';
import './App.css'

import phrases from './Utils/Phrases.json' 
import BtnQuote from './components/BtnQuote';
import Quote from './components/Quote';
import getRamdomElementArray from './Utils/getRamdomElementArray';


function App() {

const phraseRamdom = getRamdomElementArray(phrases)

const numberRamdom = getRamdomElementArray([1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14])

const [quote, setQuote] = useState(phraseRamdom)

const [numberBg, setNumberBg] = useState(numberRamdom)

  const bgStyle = {
    backgroundImage: `url(/fondo${numberBg}.jpg)`

  }


  return (
    
      <div className='container' style={bgStyle}>
        <h1 className='container__title'>Galleta de la Fortuna</h1>
        <Quote phrase = {quote}/>
        <BtnQuote 
        setQuote={setQuote}
        phrases={phrases}
        setNumberBg={setNumberBg}
        />
      </div> 
      
  )
}

export default App
