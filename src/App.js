import React, { useEffect, useRef, useState } from "react";
import './App.css'
import structure from './API'

const Contryes = ({ name, languages}) => {
  const [isActive, setIsActive] = useState(false);

  let useClickOutside = (handler) => {
    let tree = useRef()

    useEffect(() => {
      let mhandler = (e) => {
        if(!tree.current.contains(e.target)){
          handler()
        }
      }
      document.addEventListener("mousedown", mhandler)
      return () => {document.addEventListener("mousedown", mhandler)}  
    })
    return tree
  }

  let tree = useClickOutside(() => {
    setIsActive(false)
  })

  return(
    <ul ref={tree}>
      <li ><span onClick={() => setIsActive(!isActive)}>{name}</span>
        {isActive && <ul>
          {languages.map(c => 
            <li><span>{c.name}</span></li>
          )}
        </ul>}
      </li>
    </ul>
  )
}

const Countries = ({name, countries}) => {
  const [isActive, setIsActive] = useState(false);

  let useClickOutside = (handler) => {
    let tree = useRef()

    useEffect(() => {
      let mhandler = (e) => {
        if(!tree.current.contains(e.target)){
          handler()
        }
      }
      document.addEventListener("mousedown", mhandler)
      return () => {document.addEventListener("mousedown", mhandler)}  
    })
    return tree
  }

  let tree = useClickOutside(() => {
    setIsActive(false)
  })
 
  return (
    <ul ref={tree} >
        <li><span onClick={() => setIsActive(!isActive)}>{name}</span>
          {isActive && <div>
            {countries.map(c => <Contryes name={c.name} languages={c.languages} />)}
          </div>}
        </li>
    </ul>
  );
};


const App=()=> {
  return <div>{structure.data.continents.map(c =><Countries name={c.name} countries={c.countries} />)}</div>
}

export default App;