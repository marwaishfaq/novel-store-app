import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4004/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        setContact({
          username: "",
          email: "",
          message: "",
        });
        const data = await response.json();
        console.log(data);
        alert("Message sent successfully");
      }
    } catch (error) {
      alert("Message not sent");
      console.log("Message not sent");
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-page" style={{
  marginTop: "100px",
  backgroundColor: "#fff",
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px"
}}>
      <h1 style={{
    textAlign: "center",
    color: "#EC4899",
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "10px"
  }}>Contact Us</h1>
  <p style={{
    textAlign: "center",
    color: "#666",
    fontSize: "18px",
    maxWidth: "500px",
    marginBottom: "20px"
  }}>Get in touch with us for any queries or visit our store location.</p>

        {/* Contact Form */}
        <div className="form-container" style={{ width: "50%", margin: "auto", backgroundColor: "#fff", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label htmlFor="username" style={{ display: "block", marginBottom: "5px", color: "#333" }}>Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={contact.username}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "5px", border: "1px solid #ccc", backgroundColor: "#f9f9f9" }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label htmlFor="email" style={{ display: "block", marginBottom: "5px", color: "#333" }}>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={contact.email}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "5px", border: "1px solid #ccc", backgroundColor: "#f9f9f9" }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label htmlFor="message" style={{ display: "block", marginBottom: "5px", color: "#333" }}>Message:</label>
              <textarea
                id="message"
                name="message"
                value={contact.message}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "5px", border: "1px solid #ccc", backgroundColor: "#f9f9f9", height: "70px" }}
              />
            </div>
            <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#EC4899", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;