import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
  input {
    margin-bottom: 12px;
  }
`;
export const Title = styled.p`
  color: var(--primary);
  margin-bottom: 80px;
  font-size: 16px;
`;
export const Select = styled.select`
  min-height: 50px;
  width: 200px;
  margin-bottom: 60px;
  border-radius: 8px;
  color: var(--primary);
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
`;
