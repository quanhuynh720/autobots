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
        <NavbarBrand href="/">Snappy</NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>

          <NavItem>
              <Link to='/login'>login</Link>
            </NavItem>

       
          
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Links
              </DropdownToggle>
              <DropdownMenu right>

                
                <DropdownItem>
                  <Link to='/registry'>Registry</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/friendsList'>Friends List</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/postList'>Feed</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/userProfile'>My Profile </Link>
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}