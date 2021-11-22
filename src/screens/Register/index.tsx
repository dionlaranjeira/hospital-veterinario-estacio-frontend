import { ButtonPrimary } from "../../components/ButtonPrimary";
import { InputPrimary } from "../../components/InputPrimary";

import { Container, Title, Select } from "./styles";
export function Register() {
  return (
    <Container>
      <Title>Dados Cadastrais</Title>
      <Select name="Tipo de cliente" id="Clienteform" form="Clientform">
        <option value="Cliente">Cliente</option>
        <option value="Veterinário">Veterinário</option>
      </Select>
      <InputPrimary type="Text" name="Nome" placeholder="Nome" />
      <InputPrimary type="Text" name="Login" placeholder="Login" />
      <InputPrimary type="Password" name="Senha" placeholder="Senha" />
      <InputPrimary
        type="Password"
        name="Senha"
        placeholder="Confirmar senha"
      />

      <ButtonPrimary type="submit" children="CADASTRAR" />
    </Container>
  );
}
