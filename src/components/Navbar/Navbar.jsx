import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext/UserContext";
import UserDropdown from "../UserDropdown/UserDropdown";
import "./Navbar.css";

function NavbarPlantiv() {
  const { user, logout } = useUser();

  return (
    <Navbar className="Navbar" expand="lg">
      <Container className="containerNavbar">
        <Navbar.Brand as={NavLink} to="/" style={{ color: "black" }}>
          <img
            src="https://i.pinimg.com/originals/48/a1/5c/48a15cf0d6d3ab2b944c6ba6ee0759d8.png"
            alt="Plantiv"
            style={{ width: "100px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav">
            {!user ? (
              <>
                <NavLink className="navlinkNavbar" to="/login">
                  Login
                </NavLink>
                <NavLink className="navlinkNavbar" to="/register">
                  Registrarse
                </NavLink>
              </>
            ) : null}
            <NavLink className="navlinkNavbar" to="/products">
              Productos
            </NavLink>
            {user && (
              <>
                <NavLink className="navlinkNavbar" to="/cart">
                  Carrito
                </NavLink>
                <NavLink className="navlinkNavbar" to="/publish">
                  Publicar
                </NavLink>
                <UserDropdown logout={logout} />
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPlantiv;
