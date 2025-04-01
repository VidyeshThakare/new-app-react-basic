import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue]= useState(0);

  const reset =()=>{
    setValue(0);
  }

  const complexIncrease=()=>{
    setTimeout(()=>{
     // setValue(value +1)
     setValue((preValue)=>{
      return preValue +1;
     })
    }, 2000);
  }

  return <>
  <section style={{margin: '4rem 0'}}>
    <h2>regular counter</h2>
    <h2>{value}</h2>
    <button onClick={()=> setValue(value -1)}>decrease</button>
    <button onClick={reset}>reset</button>
    <button onClick={()=> setValue(value +1)}>increase</button>
  </section>

  <section style={{margin: '4rem 0'}}>
    <h2>more complex counter</h2>
    <h2>{value}</h2>
    <button onClick={complexIncrease}>Increase later</button>
  </section>
  </>;
};

export default UseStateCounter;
