import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState("Random text")
  const handleClick = () =>{
    if(text === 'Random text'){
    setText("This is new Text")
  }
  else{
    setText("Random text") 
  }
  }
    return (
    <>
    <h2>{text}</h2>
    <button type='button' onClick={handleClick}>Change title</button>
    </>
  )
};

export default UseStateBasics;
