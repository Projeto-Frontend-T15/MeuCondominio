import { useContext, useEffect } from "react";
import { HomeContext } from "../../../Contexts/homeContext";
import { CardCash } from "./CardCash/cardCash";
import { CashStyled } from "./styles";

export const CashInfos = () => {
  const { cashs, readCash } = useContext(HomeContext);

  useEffect(() => {
    readCash();
  }, []);

  return (
    <>
      {cashs.length > 0 ? (
        <CashStyled>
          {cashs.map((cash) => (
            <CardCash
              title={cash.title}
              price={cash.price}
              id={cash.id}
              key={cash.id}
            />
          ))}
        </CashStyled>
      ) : (
        <p>Sem entradas</p>
      )}
    </>
  );
};
