import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../img/logo.jpeg';

const NavbarComponent = () => {
    return(
        <>
            <Navbar expand="lg" className="bg-dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="Wens Koffie"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="text text-white">Home</Nav.Link>
                        <Nav.Link href="#produk" className="text text-white">Produk</Nav.Link>
                        <Nav.Link href="#contact" className="text text-white">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent;