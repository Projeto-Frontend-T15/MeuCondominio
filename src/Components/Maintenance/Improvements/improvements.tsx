import { useContext, useEffect } from "react";
import { ResidentContext } from "../../../Contexts/residentContext";
import { CardImprovement } from "./Card Improvements/cardImprovements";
import { ImprovementsListStyled } from "./styled";

export function ImprovementsList() {
  const { improvements, improvementsApi } = useContext(ResidentContext);

  useEffect(() => {
    improvementsApi();
    console.log(improvements);
  }, []);

  return (
    <ImprovementsListStyled>
      {improvements.length ? (
        improvements.map((improvement) => (
          <CardImprovement
            key={improvement.id}
            title={improvement.title}
            description={improvement.description}
            id={improvement.id}
          />
        ))
      ) : (
        <p>Sem melhorias</p>
      )}
    </ImprovementsListStyled>
  );
}
