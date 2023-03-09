import { CardMaintenance } from "../Components/CardMaintenance/maintenance";
import { Header } from "../Components/headerPageUser/header";
import { ListMessagesUserPage } from "../Components/ListMessagesUser/listMessage";

const HomeUser = () => (
  <>
    <Header />
    <div>
      <ListMessagesUserPage />
    </div>
    <div>
      <CardMaintenance />
    </div>
  </>
);

export default HomeUser;
