import React from "react";
import BookItem from "./BookItem";

function Books({ books, limit }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {books.slice(0, limit).map((book, index) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
}

export default Books;