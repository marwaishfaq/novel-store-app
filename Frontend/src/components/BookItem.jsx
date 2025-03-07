import React from "react";

function BookItem({ book }) {
  return (
    <div className="bg-white p-4 border border-gray-200 w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
         <img src={book.image} alt={book.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-bold">{book.title}</h2>
      <p className="text-gray-600">Author: {book.author}</p>
      <a
        href={book.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        Read Novel
      </a>
    </div>
  );
}

export default BookItem;