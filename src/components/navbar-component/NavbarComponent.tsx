import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';

export const NavbarComponent = (props:any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Howdy Fagiolis!</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to='/login'>Login</Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/tatoelpato/Snappy">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Links
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to='/chucknorris'>ChuckNorris</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/pokemon'>Pokemon</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/clicker'>Clicker</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/starwars'>StarWars</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/tic-tac-toe'>Tic-Tac-Toe</Link>
                </DropdownItem> 
                <DropdownItem>
                  <Link to='/registry'>Registry</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/post'>Feed</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Don't look here please</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}