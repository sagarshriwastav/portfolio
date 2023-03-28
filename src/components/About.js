import React from 'react'
import "./About.css"

const About = () => {

  return (
    <>
      <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h1><span style={{ color: "#6c63ff" }} >Skills </span></h1>
            {/* <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}> */}
            <p style={{ letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>
              <b>Programming Languages:</b>   Java, Java Script, C++, Python, C <br />
              <b>Coding Journey:</b>   LeetCode, GeeksforGeeks, HackerRank    <br />
              Solved 460+ DSA Probelms , 5-Star in SQL HackerRank <br />
              <b>Frameworks:</b> React.js, Redux, Node.js, Express.js, Socket.io, React-Bootstrap
              <br />
              <b>Database Management System:</b>   SQL, MongoDB <br />
              <b>Development & Operations:</b>   Render.com, Cloudfare, Netlify <br />
              <b>Computer Fundamentals:</b> OOPS, DBMS, Computer Networking, Operating System <br />
              <b>Other Skills:</b> Linux, Git-GitHub, FIGMA
            </p>
          </div>
          <div className="right_container mt-3">
            <img src="/images/study_table.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About