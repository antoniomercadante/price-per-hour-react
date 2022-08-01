import styled from "styled-components";

const User = ({ name }) => {
  return <Name>{name}</Name>;
};

const Name = styled.h2`
  text-align: center;
  font-weight: 700px;
  padding: 2rem 1rem;
  color: #fff;
  text-shadow: 2px 2px 16px rgba(206, 200, 200, 0.767);
`;

export default User;
