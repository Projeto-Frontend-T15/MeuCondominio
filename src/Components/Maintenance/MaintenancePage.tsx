import { ListConds } from "../listConds";
import { CashInfos } from "./Cash/cashInfos";
import { ImprovementsList } from "./Improvements/improvements";
import { ImprovementsStyled } from "./style";

export function ImprovementsPage() {
  return (
    <>
      <ImprovementsStyled>
        <h1>Manutencao</h1>
        <ListConds />
        <div className="container_maintenance">
        <ImprovementsList />
        <CashInfos />
        </div>
       
       
      </ImprovementsStyled>
    </>
  );
}
