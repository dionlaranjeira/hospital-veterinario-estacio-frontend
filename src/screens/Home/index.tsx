import { InputPrimary } from "../../components/InputPrimary";
import { Container, Menu, WrapperSearch } from "./styles";
export function Home() {
  return (
    <Container>
      <Menu>
        <p>Hospital Veterinário Estácio da Amazônia</p>
        <h3>Início</h3>
      </Menu>
      <WrapperSearch>
        <button type="submit" className="Button-plus"></button>
        <InputPrimary
          type="Text"
          name="Pesquisar Pet"
          placeholder="Pesquisar Pet"
        />
        <button type="submit" className="Button-search"></button>
      </WrapperSearch>
    </Container>
  );
}
