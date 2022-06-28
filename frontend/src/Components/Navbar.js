import React from 'react'
import {Input, Navbar, NavbarBrand} from 'reactstrap'
import {BsFillBellFill,BsPlus}      from 'react-icons/bs'
import {FaUserCircle}               from 'react-icons/fa'
import {VscGithubInverted}          from 'react-icons/vsc' 
import '../styles/navbar.css'
const CustomNavbar = () => {
  return (
    <Navbar
      color="dark"
      expand="md"
      dark
      className='navbar_container'
    >
      <div className='navbar_container_left-items'>
        <NavbarBrand>
          <VscGithubInverted style={{fontSize : '25px'}}/>
        </NavbarBrand>
        <Input placeholder='search' className='navbar_container_left-items-input'/>
        <div className='navbar_container_items-wrapper'>
          <ul className='navbar_container_items-wrapper-options-left'>
            <li>Pull request</li>
            <li>Marketplace</li>
            <li>Issues</li>
            <li>Explore</li>
          </ul>
        </div>
      </div>
      <div className='navbar_container_right-items'>
        <div className='navbar_container_items-wrapper'>
          <ul className='navbar_container_items-wrapper-options-right'>
            <li>
                <BsFillBellFill />
            </li>
            <li>
                <BsPlus fontSize={'md'} />
            </li>
            <li>
                <FaUserCircle />
            </li>
          </ul>
        </div>
      </div>
    </Navbar>
  )
}

export default CustomNavbar
