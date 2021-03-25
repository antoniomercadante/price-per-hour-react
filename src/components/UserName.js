import styled, { css } from "styled-components";

const UserName = ({ name }) => {
  return <h2>{name}</h2>;
};

const Name = styled.h2`
  font-weight: 600;
`;

export default UserName;
