import React, { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_lxg787v", // EmailJS service ID
        "template_6utf32o", // EmailJS template ID
        formData,
        "hYzfV1Vrr8iWiVLX_" // EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setIsSent(true);
          setError("");
          setFormData({ name: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setError("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="form">
      {isSent && <p style={{ color: "green" }}>Your message has been sent!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          ></textarea>
        </div>
        <button className="button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;