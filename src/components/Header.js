import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';



const Header = () => {

    const common = {
        marginRight: 15,
        fontSize: 17,
        letterSpacing: ".5px",
    }

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container >
                    <div>
                        <h2 className='mt-2 h2_right' style={{ color: "#6c63ff" }} >
                            <Nav.Link href="#home">Sagar Shriwastav</Nav.Link>
                        </h2>
                    </div>
                    <Nav>
                        <div className='mt-2' >
                            <NavLink to="/" className="text-decoration-none" style={common} >Home</NavLink>
                            <NavLink to="/about" className="text-decoration-none" style={common} >Skills</NavLink>
                            <NavLink to="/projects" className="text-decoration-none" style={common} >Projects</NavLink>
                            <NavLink to="/contact" className="text-decoration-none" style={common} >Contact</NavLink>
                        </div>
                        <div className="mt-2">
                        <p className='d-flex' >
              <a href="https://github.com/sagarshriwastav?tab=repositories" target="_blank" rel="noreferrer" >
                <i className='fa-brands fa-github' ></i>
              </a>
              <a href="https://www.facebook.com/sagarkumar.shriwastav" target="_blank" rel="noreferrer">
              <i  className='fa-brands fa-linkedin mx-3' ></i>
              </a>
            </p>     
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header