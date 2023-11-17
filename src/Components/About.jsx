import React, { useState } from "react";

function About() {
  const [activeTab, setActiveTab] = useState(0);

  const profileTabContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    padding: "10px",
  };

  const profileTab = {
    padding: "10px",
    margin: "0",
    cursor: "pointer",
    color: "#ffffff", // Default color
  };

  const onTabClick = (index) => {
    setActiveTab(index);
  };

  const onTabHover = {
    color: "#ff5722", // Hover color
  };

  const contentContainer = {};

  const sectionContent = {
    display: activeTab === null ? "none" : "block",
  };

  return (
    <div className="container p-3">
      <div className="d-md-flex flex-md-row-reverse">
        <div className="p-2 text-center text-md-start flex-md-grow-1 order-md-2">
          <img
            src="https://images.unsplash.com/photo-1613940102159-1e7a40f2b60e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width="90%"
            height="90%"
            style={{ borderRadius: "15px" }}
          />
        </div>
        <div className="p-3 ms-md-5 flex-md-grow-1 order-md-1">
          <h1 className="font-monospace" style={{ fontSize: "35px" }}>
            About Me
          </h1>
          <p className="" style={{ color: "gray", fontSize: "14px" }}>
            Hello! I'm Shivam, a dedicated Full Stack Developer with six months
            of hands-on experience in crafting robust and scalable web
            applications. Armed with a BCA degree, I am passionate about solving
            complex problems through innovative coding solutions. My journey
            into the world of technology has equipped me with a diverse skill
            set, ranging from front-end technologies like React.js to back-end
            frameworks like Node.js.
          </p>
          <div>
            <div style={profileTabContainer}>
              <p
                style={{ ...profileTab, ...(activeTab === 0 && onTabHover) }}
                onClick={() => onTabClick(0)}
              >
                Skills
              </p>
              <p
                style={{ ...profileTab, ...(activeTab === 1 && onTabHover) }}
                onClick={() => onTabClick(1)}
              >
                Experience
              </p>
              <p
                style={{ ...profileTab, ...(activeTab === 2 && onTabHover) }}
                onClick={() => onTabClick(2)}
              >
                Education
              </p>
            </div>
            <div style={contentContainer}>
              <div
                style={{
                  ...sectionContent,
                  display: activeTab === 0 ? "block" : "none",
                }}
              >
                <div className="d-flex flex-wrap justify-content-start">
                  <ul>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                  <ul>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>Node.js</li>
                  </ul>
                </div>
              </div>
              <div
                style={{
                  ...sectionContent,
                  display: activeTab === 1 ? "block" : "none",
                }}
              >
                <p>Full Stack Developer - Govardhan Learning Cloud </p>
                <p>Frontend Developer - 10x- Academy</p>
              </div>
              <div
                style={{
                  ...sectionContent,
                  display: activeTab === 2 ? "block" : "none",
                }}
              >
                <p>BCA - Veer Bahadur Singh Purvanchal University</p>
                <p>High School - Mata Pita Inter College</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
