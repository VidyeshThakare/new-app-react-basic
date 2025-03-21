import React from 'react'
import "./card.css"

const items=[
  {name: 'Potato', id:1},
  {name: 'Tomato', id:2},
  {name: 'Methi', id:3}
]

const Card = () => {
  const list=items.map((item)=>(
    <li key={item.id}>{item.name}</li>
  ))
  return (
    <>
    <div className="container">
    <ul>{list}</ul>
    </div>
    </>
  )
}

export default Card