import getRamdomElementArray from "../Utils/getRamdomElementArray"

const BtnQuote = ({setQuote, phrases, setNumberBg}) => {

    const handleRamdonPhrase = () => { 
        setQuote(getRamdomElementArray(phrases))
        setNumberBg(getRamdomElementArray([1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14]))

    }

  return (
    <button className="container__btn" onClick={handleRamdonPhrase}>New Phrase👁‍🗨</button>
  )
}

export default BtnQuote
