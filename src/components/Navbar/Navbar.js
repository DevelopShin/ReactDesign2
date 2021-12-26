import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Nav, NavbarContainer, MenuWrap, NavIcon, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './navbar.elements'
function Navbar() {
  const [mClicke, setmClicke] = useState(false)
  const onClickHandler = (params) => {
    setmClicke(!mClicke)
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <NavIcon />
              Logo
            </NavLogo>
            <MobileIcon onClick={onClickHandler}>{mClicke ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            {/* <MenuWrap click={mClicke} onClick={onClickHandler}> */}
              <NavMenu click={mClicke} onClick={onClickHandler}>
                <NavItem >
                  <NavLinks to='/'>Home</NavLinks>
                </NavItem>

                <NavItem >
                  <NavLinks to='/'>Home2</NavLinks>
                </NavItem>

                <NavItem >
                  <NavLinks to='/'>Home3</NavLinks>
                </NavItem>

              </NavMenu>
            {/* </MenuWrap> */}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
