import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className='text-center'>
                <Container className='flex-column'>
                    <Navbar.Brand href="/home"><div className='d-inline-flex '><div className='the'>The</div>< div className='siren '>Siren</div> </div> </Navbar.Brand>
                
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{
                            position: 'absolute',
                            right: ' 10px',
                            top: ' 40px'
                        }} />
                        
                        <Navbar.Collapse className='' >
                            <Nav className="d-flex justify-content-around  ">
                                
                                <Link className='header_component p-2 col-example text-left' to='/home'>Home</Link>
                                <Link className='header_component  p-2 col-example text-left' to='/bollywood'>Bollywood</Link>
                                <Link className='header_component  p-2 col-example text-left' to='/hollywood'>Hollywood</Link>
                                <Link className='header_component  p-2 col-example text-left' to='/technology'>Technology</Link>
                                <Link className='header_component  p-2 col-example text-left' to='/fitness'>Fitness</Link>
                                <Link className='header_component  p-2 col-example text-left' to='/food'>Food</Link>

                            </Nav>
                        </Navbar.Collapse>
                        
                    </div>
                </Container>
            </Navbar><br /><br />
            </div>
    )
}

export default Header
