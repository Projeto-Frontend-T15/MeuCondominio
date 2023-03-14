import { useContext } from "react";
import { ResidentContext } from "../../Contexts/residentContext";
import { CardMaintenance } from "./CardMaintenance/maintenance";

export function Maintenance() {
  const { maintenance, maintenanceApi } = useContext(ResidentContext);

  return (
    <>
      <h2>Manutenção</h2>
      {maintenance?.map((maint) => (
        <CardMaintenance
          userId={maint.userId}
          cond_id={maint.cond_id}
          name={maint.name}
          service={maint.service}
          contact={maint.contact}
          id={maint.id}
          key={maint.id}
        />
      ))}
    </>
  );
}
