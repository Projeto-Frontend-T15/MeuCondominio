import { ListConds } from "../listConds";
import { CashInfos } from "./Cash/cashInfos";
import { ImprovementsList } from "./Improvements/improvements";
import { ImprovementsStyled } from "./style";

export function ImprovementsPage() {
  return (
    <ImprovementsListStyled>
          <h1>Manutencao</h1>
      <ListConds/>
      <ImprovementsList />
      <CashInfos />
    </ImprovementsListStyled>
  );
}
