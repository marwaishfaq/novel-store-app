import React from "react";
import Navbar from "../components/Navbar";
import Books from "../components/Books";
import Footer from "../components/Footer";
import booksData from '../data/Book.json';

function Courses() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 mt-16 mb-8"> 
        <Books books={booksData} limit={booksData.length} />
      </div>
      <Footer />
    </>
  );
}

export default Courses;