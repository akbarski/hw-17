import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <h2>LOGO</h2>
      </Logo>
      <nav>
        <NavBar>
          <StyledLink to="/courses">Courses</StyledLink>
          <StyledLink to="/announcements">Announcements</StyledLink>
          <StyledLink to="/notifications">Notifications</StyledLink>
          <StyledLink to="/schedule">Schedule</StyledLink>
        </NavBar>
      </nav>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  width: 250px;
  height: 100vh;
  background-color: rgb(213, 203, 203);
  position: fixed;
`;

const Logo = styled.div`
  color: blueviolet;
  text-align: center;
`;

const NavBar = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  /* gap: 10px; */
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
  background-color: #fff;
  height: 40px;
  text-decoration: none;
  color: blue;
  font-weight: 600;

  &.active {
    color: #222;
    background-color: #831be54a;
  }
`;
