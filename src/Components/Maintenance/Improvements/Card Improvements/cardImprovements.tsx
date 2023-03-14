import { iCardImprovement } from "../../../../Contexts/interfacesResident";
import { CardImprovementStyled } from "./styled";

export const CardImprovement = ({
  title,
  description,
  id,
}: iCardImprovement) => {
  // renderizar moradores do condominio conforme select
  return (
    <>
      <CardImprovementStyled>
        <p>{title}</p>
        <p>{description}</p>
        <p>{id}</p>
      </CardImprovementStyled>
    </>
  );
};
