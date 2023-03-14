import { ListConds } from "../listConds";
import { CashInfos } from "./Cash/cashInfos";
import { ImprovementsList } from "./Improvements/improvements";
import { ImprovementsStyled } from "./styled";

export function ImprovementsPage() {
  return (
    <ImprovementsStyled>
      <ListConds/>
      <ImprovementsList />
      <CashInfos />
    </ImprovementsStyled>
  );
}
