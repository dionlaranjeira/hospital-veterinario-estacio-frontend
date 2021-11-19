import React, { ButtonHTMLAttributes } from "react";
import { Button } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
}
export function ButtonPrimary(props: ButtonProps) {
  const { children, ...rest } = props;
  return <Button {...rest}>{children}</Button>;
}
