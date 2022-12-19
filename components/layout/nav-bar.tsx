import Image from "next/image";
import { BiShoppingBag } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar as NavbarBs,
} from "reactstrap";
const Navbar = () => {
  return (
    <NavbarBs sticky="top" className="bg-dark">
      <Container>
        <div className="d-flex justify-content-between">
          <Nav className="me-auto">
            <NavItem>
              <NavLink to="/">
                <Image
                  src="/logo/logo.png"
                  alt="logo"
                  height={65}
                  width={128}
                />
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="me-auto">
            <NavItem>
              <NavLink to="/" style={{ color: "white" }}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" style={{ color: "white" }}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/menu" style={{ color: "white" }}>
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/blog" style={{ color: "white" }}>
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" style={{ color: "white" }}>
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="d-flex float-right">
            <NavItem>
              <NavLink to="/" style={{ color: "white" }}>
                <FiSearch style={{ fontSize: "25px" }} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" style={{ color: "white" }}>
                <BiShoppingBag style={{ fontSize: "25px" }} />
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
