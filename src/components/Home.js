import React from 'react'
import { Button } from 'react-bootstrap'
import "./Home.css"


const Home = () => { 
  // var audio = new Audio("/audio/welcome.mp3")
  // audio.play();
  return (
    <>  
      <div className="container home_container ">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2> <span style={{ color: "#6c63ff" }}>Hi!  I'm Sagar. <br /> </span> </h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }} >
            Pursuing a B.Tech degree in Information Technology from MAKAUT, W.B. I'm a web and software developer and computer programmer with an avid interest in Data Structures, Algorithms, and Optimization. As a core programmer, I love taking on challenges and love being part of the solution.
            </p>
            <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, backgroundColor: "#2f2d69", marginRight: 24 }} href="https://www.linkedin.com/in/sagar-kumar-3a0111170/" target='_blank' >LinkedIn</Button>
            <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, backgroundColor: "#6c63ff" }} href="/SAGAR_Resume1.pdf"  download="SAGAR_Resume1.pdf" >Download CV</Button>
          </div>
          <div className="right_div">
            <img src="/images/homepage_img.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home