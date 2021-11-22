import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  input {
    margin-bottom: var(--Small-size);
  }
  p {
    color: var(--primary);
    margin-bottom: var(--Max-Size);
    text-align: center;
    font-size: var(--Max-Size);
  }
  button {
    margin-bottom: var(--Medium-Size);
  }
  a {
    color: var(--primary);
    font-size: var(--Max-Size);
    text-decoration: none;
  }
`;
export const Img = styled.img`
  height: 200px;
  width: auto;
  margin-bottom: var(--Max-Size);
`;
export const Link = styled.a`
  color: var(--text);
  font-size: 12px;
  margin-bottom: var(--Max-Size);
  text-decoration: none;
`;
