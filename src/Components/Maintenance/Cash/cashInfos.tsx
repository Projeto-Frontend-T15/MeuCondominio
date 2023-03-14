import { useContext, useEffect } from "react";
import { HomeContext } from "../../../Contexts/homeContext";
import { CardCash } from "./CardCash/cardCash";
import { StyledCash } from "./styled";

export const CashInfos = () => {
  const { cashs, readCash } = useContext(HomeContext);

  useEffect(() => {
    readCash();
  }, []);

  return (
    <StyledCash>
      <label htmlFor="div">Caixa</label>
      {cashs.length > 0 ? (
        <ul>
          {cashs.map((cash) => (
            <CardCash
              title={cash.title}
              price={cash.price}
              id={cash.id}
              key={cash.id}
            />
          ))}
        </ul>
      ) : (
        <p>Sem entradas</p>
      )}
    </StyledCash>
  );
};
