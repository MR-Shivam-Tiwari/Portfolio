import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
  const servicesContainer = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px 0",
  };

  const serviceCard = {
    width: "18rem",
    margin: "20px",
    borderRadius: "10px", // Set the border-radius for the entire card
    overflow: "hidden", // Added for image overflow
  };

  const serviceImage = {
    height: "200px",
    objectFit: "cover",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit",
    transition: "transform 0.3s ease-in-out",
  };

  const overlayLink = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 123, 255, 0.7)",
    opacity: 0,
    color: "#fff",
    transition: "opacity 0.3s ease-in-out",
    borderRadius: "inherit",
  };

  const cardContent = {
    position: "relative",
    zIndex: 1,
  };

  const cardTitle = {
    color: "#007BFF",
  };

  const handleHover = (event) => {
    const overlayLink = event.currentTarget.querySelector(".overlay-link");
    const cardImage = event.currentTarget.querySelector(".card-img-top");

    if (overlayLink && cardImage) {
      overlayLink.style.opacity = 1;
      cardImage.style.transform = "scale(1.1)";
    }
  };

  const handleMouseLeave = (event) => {
    const overlayLink = event.currentTarget.querySelector(".overlay-link");
    const cardImage = event.currentTarget.querySelector(".card-img-top");

    if (overlayLink && cardImage) {
      overlayLink.style.opacity = 0;
      cardImage.style.transform = "scale(1)";
    }
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center mb-5">Our Services</h1>
      <div className="row" style={servicesContainer}>
        {/* Web Development Service */}
        <div
          className="col-md-4 mb-4"
          style={serviceCard}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card" style={{ ...cardContent, overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="card-img-top"
              style={serviceImage}
              alt="Web Development"
            />
            <div className="overlay-link" style={overlayLink}>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Learn More
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title" style={cardTitle}>
                Web Development
              </h5>
              <p className="card-text">
                We create responsive and user-friendly websites tailored to your
                needs.
              </p>
            </div>
          </div>
        </div>

        {/* Game Development Service */}
        <div
          className="col-md-4 mb-4"
          style={serviceCard}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card" style={{ ...cardContent, overflow: "hidden" }}>
            <img
              src="https://plus.unsplash.com/premium_photo-1683134137651-85f168195e5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="card-img-top"
              style={serviceImage}
              alt="Game Development"
            />{" "}
            <div className="overlay-link" style={overlayLink}>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Learn More
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#007BFF" }}>
                Game Development
              </h5>
              <p className="card-text">
                Experience the thrill of games with our cutting-edge game
                development services.
              </p>
            </div>
          </div>
        </div>

        {/* App Development Service */}
        <div
          className="col-4 mb-4"
          style={serviceCard}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card" style={{ ...cardContent, overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1596742578443-7682ef5251cd?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="card-img-top"
              style={serviceImage}
              alt="App Development"
            />
            <div className="overlay-link" style={overlayLink}>
              <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Learn More
              </a>
            </div>
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#007BFF" }}>
                App Development
              </h5>

              <p className="card-text">
                Turn your innovative ideas into reality with our custom mobile
                app development services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
