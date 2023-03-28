import React from 'react'
import "./Footer.css"


const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Sagar Kumar</h4>
            <p>©️ {year} Sagar Kumar All rights reserved</p>
            <p className='d-flex' >
            <a href="https://github.com/sagarshriwastav?tab=repositories" target="_blank" rel="noreferrer" >
                <i className='fa-brands fa-github'></i>
              </a>
              <a href="https://www.instagram.com/_sagar.shriwastav/" target="_blank" rel="noreferrer" >
                <i className='fa-brands fa-instagram mx-3' ></i>
              </a>
              <a href="https://www.facebook.com/sagarkumar.shriwastav" target="_blank" rel="noreferrer">
              <i  className='fa-brands fa-facebook' ></i>
              </a>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>Laxman Vihar phase II Gurugram 122001 Haryana.</p>
            <p>info@sagarshriwastav2@gmail.com</p>
            <p>+91 8708998652</p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <p> <a className="text-decoration-none" href="/SAGAR_Resume1.pdf"  download="SAGAR_Resume1.pdf">Resume</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer