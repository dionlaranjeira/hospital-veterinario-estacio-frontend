import { useHistory } from "react-router-dom";

import { InputPrimary } from "../../components/InputPrimary";

import { Container, Menu, WrapperSearch } from "./styles";

export function Home() {
  const consultas = [
    {
      id: 1,
      veterinario: "Rasmuzes",
      data: "01/12/2021",
      animal: {
        nome: "Rex",
      },
    },
    {
      id: 2,
      veterinario: "Danilu",
      data: "03/12/2021",
      animal: {
        nome: "Dina",
      },
    },
  ];

  const history = useHistory();
  const handleCustomerGo = () => history.push("/Customer");

  return (
    <Container>
      <Menu>
        <p>Hospital Veterinário Estácio da Amazônia</p>
        <h3>Início</h3>
      </Menu>
      <WrapperSearch>
        <button
          type="submit"
          className="Button-pet"
          onClick={handleCustomerGo}
        ></button>
        <InputPrimary
          type="Text"
          name="Pesquisar consultas"
          placeholder="Pesquisar consultas"
        />
        <button type="submit" className="Button-search"></button>
      </WrapperSearch>
      <ul>
        {consultas.map((consulta) => (
          <li key={consulta.id}>
            <p>
              {`DATA: `}
              {consulta.data}
            </p>
            <p>
              {`VETERINARIO: `}
              {consulta.veterinario}
            </p>
            <p>
              {`NOME DO PET: `}
              {consulta.animal.nome}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
