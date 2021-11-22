export type ClientesProps = {
  nome: string;
  login: string;
  senha: string;
};
export type VetProps = ClientesProps & {
  matricula: string;
};
export type AnimalProps = {
  nome: string;
  raca: string;
  especie: string;
  peso: 0;
};
export type CustomerProps = {
  nome: string;
  CPF: string;
  animals: AnimalProps[];
};
