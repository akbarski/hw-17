import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../UI/Button";

const students = [
  {
    title: "Student 1",
    id: "1",
  },
  {
    title: "Student 2",
    id: "2",
  },
];

const Students = () => {
  const navigate = useNavigate();

  return (
    <div>
      <StyledUl>
        {students.map((item) => (
          <StyledLi key={item.id}>
            {item.title}{" "}
            <Button onClick={() => navigate(`${item.id}/detail`)}>
              Detail
            </Button>
          </StyledLi>
        ))}
      </StyledUl>
    </div>
  );
};

export default Students;

const StyledUl = styled.ul`
  display: grid;
  gap: 20px;
  list-style: none;
  width: 600px;
`;

const StyledLi = styled.li`
  background-color: #fff;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px 0 10px;
  justify-content: space-between;
`;
