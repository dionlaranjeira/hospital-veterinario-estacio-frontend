import styled from "styled-components";
import iconLupe from "../../assets/contorno-da-lupa-de-pesquisa.png";
import iconPlus from "../../assets/adicionar-icone.png";
export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
  p {
  }
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  width: 100vh;
  background-color: var(--white);
  margin-bottom: 80px;
  font-size: 16px;
  p {
    text-align: center;
  }
`;
export const WrapperSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  margin-bottom: 80px;
  font-size: 16px;

  button {
    min-height: 50px;
    width: 50px;
    background: var(--white);
    border-radius: 8px;
    background-repeat: no-repeat;
    background-position: center;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
    &.Button-plus {
      background-image: url(${iconPlus});
      margin-right: 8px;
    }
    &.Button-search {
      background-image: url(${iconLupe});
      margin-left: 8px;
    }
  }
`;
