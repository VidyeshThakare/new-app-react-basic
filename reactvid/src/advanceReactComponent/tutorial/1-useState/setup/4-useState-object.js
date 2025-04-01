import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name:'peter', age:24, message:'random message'})
  console.log(person);

  const changeMessage= ()=>{
    //setPerson({...person, message:'hello'});
    setMessage('hello world')
  }

  const [name, setName] = useState('peter');
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState('rendom message');

  return <>
    <p>{name}</p>
    <p>{age}</p>
    <p>{message}</p>
    <button className='btn' onClick={changeMessage}>change message</button>
  </>;
};

export default UseStateObject;
