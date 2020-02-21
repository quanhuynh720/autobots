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

          <Nav className="auto" navbar>

            <NavItem>
              <NavLink href='/login'>login</NavLink>
            </NavItem>

       
          
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Links
              </DropdownToggle>
              <DropdownMenu right>

                
                <DropdownItem>
                  <NavLink href='/registry'>Registry</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href='/friendsList'>Friends List</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href='/postList'>Feed</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href='/userProfile'>My Profile </NavLink>
                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}