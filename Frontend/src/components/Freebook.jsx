import React, { useState } from "react";
import data from '../data/list.json';
 
console.log(data);

function Freebook() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Number of items to display per page

  const totalPages = Math.ceil(data.length / itemsPerPage);

  console.log("Total pages:", totalPages);
  console.log("Current page:", currentPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPageData = data.slice(startIndex, endIndex);

   

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Novels</h1>
          <p>
          Unlock new worlds with every page.
            Discover the magic of reading.
              Get your free novel now!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
  {currentPageData.map((item, index) => (
    <div
      key={item.id}
      className="flex flex-col justify-center items-center bg-white p-4 border border-gray-200 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
    >
      <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-bold">{item.title}</h2>
      <p className="text-gray-600">Author: {item.author}</p>

      <a
        href={item.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        Read Novel
      </a>
    </div>
  ))}
</div>

        <div className="flex justify-center mt-4">
          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePrevPage}
          >
            Previous
          </button>

          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Freebook;