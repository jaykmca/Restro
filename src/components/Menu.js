import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList, faHome, faSearch, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav } from 'react-bootstrap'
import { Link} from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <div>  <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Restro</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home"><Link to='/'><FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} />Home</Link></Nav.Link>
                        <Nav.Link href="#link"><Link to='/List'><FontAwesomeIcon icon={faList} style={{ marginRight: '5px' }} />List</Link></Nav.Link>
                        <Nav.Link href="#link"><Link to='/Create'><FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px' }} />Create</Link></Nav.Link>
                        <Nav.Link href="#link"><Link to='/Search'><FontAwesomeIcon icon={faSearch} style={{ marginRight: '5px' }} />Search</Link></Nav.Link>
                        {
                            localStorage.getItem('login') ? 
                            <Nav.Link href="#link"><Link to='/logout'><FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />Logout</Link></Nav.Link>
                            :
                            <Nav.Link href="#link"><Link to='/login'><FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />Login</Link></Nav.Link>
                        }
                        
                    </Nav>

                </Navbar.Collapse>
            </Navbar></div>
        )
    }
}


export default Menu