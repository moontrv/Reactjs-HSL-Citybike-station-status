import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <div id="main-nav" className="container">
                    <Navbar.Brand href="#home">City Bikes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="nav-link" exact to="/" >Map service</NavLink>
                            <NavLink className="nav-link" to="/station-list" >Station list</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}