import styled from "styled-components";
import iconLupe from "../../assets/contorno-da-lupa-de-pesquisa.png";
import iconPet from "../../assets/pet.png";

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
  ul {
    list-style: none;
  }
  ul li {
    border: 1px solid var(--secondary);
    border-radius: 8px;
    background-color: #fff;
    padding: var(--Small-size);
    margin-bottom: var(--Small-size);
    cursor: pointer;
    &:hover {
      border: 1px solid var(--tertiary);
    }
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
  margin-bottom: var(--Max-Size);
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
  margin-bottom: var(--Max-Size);
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
    &.Button-pet {
      background-image: url(${iconPet});
      margin-right: 8px;
    }
    &.Button-search {
      background-image: url(${iconLupe});
      margin-left: 8px;
    }
  }
`;
