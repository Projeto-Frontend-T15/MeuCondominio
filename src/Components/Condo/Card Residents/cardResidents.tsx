import { useState } from "react";
import { iCardResident } from "../../../Contexts/interfacesResident";
import { StyledCardResident } from "./styles";

export const CardResident = ({ name, email }: iCardResident) => {
  return (
    <>
      <StyledCardResident>
        <p>{name}</p>
        <p>{email}</p>
      </StyledCardResident>
    </>
  );
};
