import React from 'react'
import { useState } from "react"

const user={
    name:'vidyesh thakare',
    age: 23
  };
  
  const products =[
    {name: 'Apple', id: 1},
    {name: 'mango', id: 2},
    {name: 'pineApple', id: 3}
  ]
  

function List() {
    const listitem= products.map((product) =>(
        <li key={product.id}>{product.name}</li>
      ));
    
      const [count, setCount] =  useState(0);
    
      function Add(){
        setCount(count+1);
      }
      function Sub(){
        setCount(count-1);
      }
    
  return (
    <>
    <div className="App">
    <h1>my name is {user.name} and i'm {user.age} years old.</h1>
    </div>
    <div>
      <ul>{listitem}</ul>
    </div>

    <button onClick={Add}>Add</button>
    <button onClick={Sub}>Sub</button>
    <p>total count is: {count}</p>
    </>
  )
}

export default List