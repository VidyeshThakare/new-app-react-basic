import React from "react";
import "./booklist.css";
import { books } from "./books";

const Book = ( { img, title, author }) => {
  
  const clickhandler = () =>{
    alert("hello");  
  };
const complexExample = (author)=>{
  console.log(author);
}

  return (
    <article className="book">
      <img src={img} style={{ height: "200px" }} alt=""/>
      <h1 onClick={()=> console.log({title})}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickhandler}>Click me</button>
      <button type="button" onClick={complexExample}>Click me</button>
    </article>
  );
};


function BookList() {
  return (
    <>
      <section className="booklist">
        {books.map((book)=>{
          return (
           <Book key={book.id} {...book}></Book>
          );
        })}
        
      </section>
    </>
  );
}

export default BookList;
