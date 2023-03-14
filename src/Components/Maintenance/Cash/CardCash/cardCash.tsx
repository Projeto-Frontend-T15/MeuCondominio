import { iCardCash, iCardImprovement } from "../../../../Contexts/interfacesResident";
import { CardCashStyled } from "./styles";

export const CardCash = ({ title, price, id }: iCardCash) => {
  // renderizar moradores do condominio conforme select
  return (
    <>
      <CardCashStyled>
        <p>{title}</p>
        <p>{price}</p>
        <p>{id}</p>
      </CardCashStyled>
    </>
  );
};
