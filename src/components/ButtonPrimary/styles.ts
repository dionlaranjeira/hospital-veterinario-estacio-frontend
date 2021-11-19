import styled from "styled-components";

export const Button = styled.button`
  min-height: 40px;
  width: 200px;
  background: var(--primary);
  border-radius: 24px;
  color: var(--white);
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
