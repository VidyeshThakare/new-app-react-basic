import React from "react";
import "./booklist.css";

const firstBook = {
  img: "https://m.media-amazon.com/images/I/81l3rZK4lnL._SY522_.jpg",
  title: "this is the title",
  auther: "AutherName",
};
const secondBook = {
  img: "https://m.media-amazon.com/images/I/61Ktyy7KymL._SY522_.jpg",
  title: "second title",
  auther: "AutherName2",
};

const Book = ({ img, title, auther, children }) => {
  return (
    <article className="book">
      <img src={img} style={{ height: "200px" }} alt="" srcset="" />
      <h1>{title}</h1>
      <h4>{auther}</h4>
	  {children}
    </article>
  );
};

function BookList() {
  return (
    <>
      <section className="booklist">
        <Book
          img={firstBook.img}
          title={firstBook.title}
          auther={firstBook.auther}
        >
          {" "}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            eveniet?
          </p>
        </Book>
        <Book
          img={secondBook.img}
          title={secondBook.title}
          auther={secondBook.auther}
        ></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
      </section>
    </>
  );
}

export default BookList;
