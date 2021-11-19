import { InputHTMLAttributes } from "react";
import { Input } from "./styles";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name?: string;
  alt?: string;
}
export function InputPrimary(props: InputProps) {
  return <Input {...props}></Input>;
}
