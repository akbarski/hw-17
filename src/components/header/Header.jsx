import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <nav>
        <StyledUl>
          <StyledLink to="materials">Material</StyledLink>
          <StyledLink to="students">Students</StyledLink>
          <StyledLink to="rating">Rating</StyledLink>
        </StyledUl>
      </nav>
    </Container>
  );
};

export default Header;

const StyledUl = styled.ul`
  margin: 0;
  display: flex;
  gap: 20px;
`;

const Container = styled.div`
  background-color: #4f4fd0;
  height: 73px;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  &.active {
    color: #222;
    text-decoration: underline yellow 4px;
  }
`;
