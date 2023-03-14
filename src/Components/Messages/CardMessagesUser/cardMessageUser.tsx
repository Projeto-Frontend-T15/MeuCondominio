import { useContext } from "react";
import { HomeContext } from "../../../Contexts/homeContext";
import { StyledMessageUser } from "./styled";

interface iCardMessageUSer {
  title: string;
  description: string;
  id: number;
  condID:number | undefined;
}

export const CardMessageUser = ({
  title,
  description,
  id,
  condID,
}: iCardMessageUSer) => {
  
  return (
    <StyledMessageUser>
      <p>{title}</p>
      <p>{description}</p>
      <p>Condo: {condID}</p>
    </StyledMessageUser>
  );
};