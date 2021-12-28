import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'
import { Nav, NavbarContainer, MenuWrap, NavIcon, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,BtnLinks } from './navbar.elements'
function Navbar() {
  const [mClicke, setmClicke] = useState(false)
  const onClickHandler = (params) => {
    setmClicke(!mClicke)
  }
  return (
    <>
      {/* <IconContext.Provider value={{ color: '#fff' }}> */}
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
                  <NavLinks to='/home2'>Home2</NavLinks>
                </NavItem>

                <NavItem >
                  <NavLinks to='/home3'>Home3</NavLinks>
                </NavItem>

                <NavItem >
                 <BtnLinks to="register">
                   <Button primary={'true'} fontSize={14}>SignUp</Button>
                 </BtnLinks>
                </NavItem >


              </NavMenu>
            {/* </MenuWrap> */}
          </NavbarContainer>
        </Nav>
      {/* </IconContext.Provider> */}
    </>
  )
}

export default Navbar
