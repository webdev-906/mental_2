import React, {useState} from 'react'
import { Articles } from '../components/Articles'
import { Teams } from '../components/Teams';
import { Footer } from '../components/Footer'


function MyHealth360() {

  const [language, setLanguage] = useState("spanish");
  return (
    <div>
      <Articles language={language} handleLanguage={(language)=> setLanguage(language)}/>
 <Teams language={language}/>
 <Footer/>
    </div>
  )
}

export default MyHealth360;
