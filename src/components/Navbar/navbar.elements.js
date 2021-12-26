import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { FaMagento } from 'react-icons/fa'
// import { Container } from '../../globalStyles'
export const Nav = styled.nav`
  background-color: #101522;
  min-width:260px;
  height: 80px;
  /* width: 100%; */
  display: flex;
  justify-content:center;
  align-items: center;
  font-size: 1.2rem;
  position:sticky;
  top:0;
  z-index: 111;
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width:100%;
  max-width:1300px;
  margin-right:auto;
  margin-left: auto;
  padding:0 50px;
  height: 80px;

  @media screen and (max-width: 960px) {
    padding :0 30px;
  }
  @media screen and (max-width: 768px) {
    padding :0 10px;
  }
  
`

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;

`

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;

`

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
    font-size: 1.8rem;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  text-align: center;

  @media screen and ( max-width: 960px) {
    display: flex;
    flex-direction:column;
    width:400px;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    transition: all 0.4s ease;
    opacity: 0.9;

    background: #101522;
    @media screen and (max-width: 400px){
      width: 100%
    }
  }
`

export const NavItem = styled.li`
  height: 80px;

  &:hover {
    border-bottom: 2px solid #4b59f7
  }

  @media screen and (max-width:960px) {
    width: 100%;
    &:hover {
      border:none;
    }
  }
`

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items:center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width:100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`