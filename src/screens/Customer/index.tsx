import { useHistory } from "react-router-dom";

import { InputPrimary } from "../../components/InputPrimary";

import { Container } from "./styles";

export function Customer() {
  const cliente = [
    {
      id: 1,
      cliente: "Paulo manu gavazze",
      data: "01/12/2021",
      animais: [
        {
          id: 1,
          nome: "Rex",
          Raça: "Poodle",
        },
        {
          id: 2,
          nome: "Jean",
          Raça: "Buldogue",
        },
      ],
    },
    {
      id: 2,
      cliente: "Lais antonyeta gonsales",
      data: "03/12/2021",
      animais: [
        {
          id: 1,
          nome: "Sena",
          Raça: "Boxer",
        },
        {
          id: 2,
          nome: "Yummi",
          Raça: "Dachshund",
        },
      ],
    },
  ];
  const history = useHistory();
  const handleGo = () => history.push("/");

  return (
    <Container>
      <h1>Clientes</h1>
      <form>
        <label>
          <InputPrimary
            type="Text"
            name="Pesquisar clientes"
            placeholder="Pesquisar clientes"
          />
        </label>
      </form>
    </Container>
  );
}
