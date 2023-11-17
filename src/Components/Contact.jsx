import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbw4U7y6il7_hSTt3sMdJuLpSUIMIqMzyPUn16THWq400teLm_DOAtkh1T9ZZdi7iQX8/exec"; // Replace with your actual script URL
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const [widthStyle, setWidthStyle] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataObject = new FormData();
    for (const key in formData) {
      formDataObject.append(key, formData[key]);
    }

    fetch(scriptURL, {
      method: "POST",
      body: formDataObject,
    })
      .then((response) => {
        if (response.ok) {
          setIsSuccess(true);
          setIsError(false);
        } else {
          setIsSuccess(false);
          setIsError(true);
        }
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setIsSuccess(false);
        setIsError(true);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactContainer = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
  };

  const leftSide = {
    flex: 1,
    marginRight: "20px",
  };

  const rightSide = {
    flex: 2,
  };

  const formContainer = {
    maxWidth: "1000px",
    margin: "0 auto",
  };

  const socialIcons = {
    fontSize: "1.5rem",
    marginRight: "10px",
  };

  const socialLink = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  };

  useEffect(() => {
    const updateWidthStyle = () => {
      const screenWidth = window.innerWidth;
      const newWidthStyle =
        screenWidth <= 1024 ? { width: "40vh" } : { width: "80vh" };
      setWidthStyle(newWidthStyle);
    };

    // Call the function to set initial width style
    updateWidthStyle();

    // Attach the function to the resize event to update width on window resize
    window.addEventListener("resize", updateWidthStyle);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", updateWidthStyle);
    };
  }, []); // Empty dependency array ensures the effect runs only once after mount

  return (
    <div className="container">
      <h1 className="text-center mb-5 mt-3" style={{ color: "" }}>
        Contact Us
      </h1>
      <div style={contactContainer}>
        <div className="row">
          <div className="col-sm-12 col-md-7 mb-4">
            <div style={leftSide}>
              <div className="">
                <h3 style={{ color: "#007BFF" }}>Contact Information</h3>
                <p className="mt-4" style={{ color: "" }}>
                  Email: shivamt2023@gmail.com
                </p>
                <p style={{ color: "" }}>Phone: +91 8726490079</p>
                <div style={socialLink}>
                  <FaLinkedin style={socialIcons} />{" "}
                  <a
                    href="https://www.linkedin.com/in/shivam-tiwari-389bab255/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#555" }}
                  >
                    LinkedIn
                  </a>
                </div>
                <div style={socialLink}>
                  <FaTwitter style={socialIcons} />{" "}
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#555" }}
                  >
                    Twitter
                  </a>
                </div>
                <div style={socialLink}>
                  <FaGithub style={socialIcons} />{" "}
                  <a
                    href="https://github.com/MR-Shivam-Tiwari"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#555" }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <a href="../Shivam_Tiwari_Resume.pdf" download>
                  <button className="btn btn-primary">Download CV</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 ">
            <div style={rightSide}>
              <div style={formContainer}>
                <div style={widthStyle}>
                  <h3 style={{ color: "#007BFF" }}>Contact Form</h3>

                  <form className ='mb-2' onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label
                        htmlFor="name"
                        className="form-label"
                        style={{ color: "#555" }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="Name"
                        value={formData.Name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="email"
                        className="form-label"
                        style={{ color: "#555" }}
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="message"
                        className="form-label"
                        style={{ color: "#555" }}
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="Message"
                        rows="3"
                        value={formData.Message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                  {isSuccess && (
                    <p style={{ color: "green" }}>
                      Form submitted successfully!
                    </p>
                  )}
                  {isError && (
                    <p style={{ color: "red" }}>
                      Error submitting the form. Please try again.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
