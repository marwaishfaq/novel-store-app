import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page" style={{
        marginTop: "100px",
        backgroundColor: "#fff",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        fontSize: "18px",
        color: "#333",
        lineHeight: "1.5"
      }}>
        <h1 style={{
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#EC4899"
        }}>About Us</h1>
        <div className="about-content" style={{
          maxWidth: "700px",
          margin: "auto",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px"
        }}>
          <p>Welcome to our online novel store, where book lovers can discover new authors and titles. Our mission is to provide a platform for readers to access a wide range of novels, from classics to contemporary bestsellers.</p>
          <p>Our team is passionate about reading and dedicated to creating a community of book enthusiasts. We believe that reading has the power to inspire, educate, and entertain, and we're committed to making it easier for people to discover new books and authors.</p>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Our Values</h2>
          <ul style={{
            listStyle: "none",
            padding: "0",
            margin: "0"
          }}>
            <li style={{ marginBottom: "10px" }}>
              <i className="fas fa-check-circle" style={{ color: "#4CAF50", marginRight: "10px" }}></i>
              A passion for reading and learning
            </li>
            <li style={{ marginBottom: "10px" }}>
              <i className="fas fa-check-circle" style={{ color: "#4CAF50", marginRight: "10px" }}></i>
              A commitment to excellence and quality
            </li>
            <li style={{ marginBottom: "10px" }}>
              <i className="fas fa-check-circle" style={{ color: "#4CAF50", marginRight: "10px" }}></i>
              A dedication to building a community of book lovers
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;