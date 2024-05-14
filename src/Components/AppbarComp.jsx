import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";  
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

function AppbarComp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src="https://hongo.themezaa.com/decor/wp-content/uploads/sites/11/2019/08/logo@2x.png" alt="" height={24} width={106}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <NavLink to='/' className='nav-link px-4'>Home</NavLink>
            <NavLink to='/about' className='nav-link px-4'>Shop</NavLink>
            <NavLink to='/about' className='nav-link px-4'>About</NavLink>
            <NavLink to='/about' className='nav-link px-4'>Team</NavLink>
            <NavLink to='/about' className='nav-link px-4'>Contact</NavLink>
            {/* <NavLink to='/canvas' className='nav-link px-4'>offcanvas</NavLink> */}
          </Nav>
         
          <Nav className='ms-auto'>
            <button className='icon-btn'><CiSearch/></button>
            <button className='icon-btn'><CiUser /></button>
            <button className='icon-btn'><CiHeart /></button>
            <button className='icon-btn'><CiShoppingCart /></button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppbarComp;