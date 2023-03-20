import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const materials = [
  {
    title: "Material 1",
    id: "1",
  },
  {
    title: "Material 2",
    id: "2",
  },
];

const Materials = () => {
  // const [isModalVisible, setModalVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const showModalHandler = () => {
    searchParams.set("modal", "addNewMaterial");
    setSearchParams(searchParams);
  };

  const closeModalHandler = () => {
    searchParams.delete("modal");
    setSearchParams(searchParams);
  };

  console.log([...searchParams.entries()]);

  return (
    <div>
      {searchParams.has("modal") ? <Modal onClose={closeModalHandler} /> : null}
      <div>
        <StyledBUtton onClick={showModalHandler}>Add new material</StyledBUtton>
      </div>
      <StyledUl>
        {materials.map((item) => (
          <StyledLi key={item.id}>
            {item.title}
            <Button onClick={() => navigate(`${item.id}/detail`)}>
              Detail
            </Button>
          </StyledLi>
        ))}
      </StyledUl>
    </div>
  );
};

export default Materials;

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

const StyledBUtton = styled.button`
  background-color: orange;
  padding: 10px 30px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    background-color: #d19931;
  }
`;
