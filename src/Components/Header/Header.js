import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/icon-logo/logo.png'
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="p-0">
                <Container className="fs-5">
                    {/* header logo  */}
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="110"
                            height="50"
                            className="d-inline-block align-top"
                            alt=""
                        />
                     </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* header area page */}
                    <Nav className="ms-auto">
                        <NavLink className="p-3 text-dark text-decoration-none fw-bold" to="/home">Home</NavLink>
                        <NavLink className="p-3 text-dark text-decoration-none fw-bold" to="/service">Service</NavLink>
                        <NavLink className="p-3 text-dark text-decoration-none fw-bold" to="/about">About Us</NavLink>
                        <NavLink className="p-3 text-dark text-decoration-none fw-bold" to="/contact">Contact Us</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;