import React from 'react';
import {Navbar, NavItem} from 'react-materialize';

function Header() {
  return (
    <div className="Header ">
      <Navbar brand={<a href="/qualquercoisa">Ifode</a>} alignLinks="right">
        <NavItem href="">
          Getting started
        </NavItem>
        <NavItem href="components.html">
          Components
        </NavItem>
      </Navbar>
    </div>
  );
}
export default Header;