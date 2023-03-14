import { ListConds } from "../listConds";
import { CashInfos } from "./Cash/cashInfos";
import { ImprovementsList } from "./Improvements/improvements";
import { ImprovementsStyled } from "./styled";

export function ImprovementsPage() {
  return (
    <ImprovementsStyled>
          <h1>Manutencao</h1>

      <ListConds/>
      <ImprovementsList />
      <CashInfos />
    </ImprovementsStyled>
  );
}
