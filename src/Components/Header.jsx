import React, { useState, useEffect } from "react";

function Header() {
  const [topMargin, setTopMargin] = useState("180px");
  const [fontSize, setFontSize] = useState("50px");
  const [blurEffect, setBlurEffect] = useState("blur(10px)");
  const [showContainer, setShowContainer] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setTopMargin("190px");
        setFontSize("2rem");
        setBlurEffect("blur(3px)");
      } else {
        setTopMargin("180px");
        setFontSize("2.5rem");
        setBlurEffect("none");
        setShowContainer(true); // Show container for larger screens
      }
    };

    // Initial call
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      {showContainer && (
        <div
          className="p-4"
          style={{
            fontWeight: "bolder",
            marginTop: topMargin,
            marginBottom: "50px",
            backdropFilter: blurEffect,
          }}
        >
          <p
            className="text-white"
            style={{ fontSize: "20px", fontFamily: "monospace" }}
          >
            Full Stack Developer
          </p>
          <h1
            className="text-white"
            style={{
              fontSize: fontSize,
              fontFamily: "monospace",
            }}
          >
            Hi, I'm <span className="text-danger">Shivam</span> <br />
            Tiwari From India
          </h1>
        </div>
      )}
    </div>
  );
}

export default Header;
