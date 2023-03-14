import { CardMaintenance } from "../../Components/CardMaintenance/maintenance";
import Header from "../../Components/Header/header";
import { ListMessagesUserPage } from "../../Components/ListMessagesUser/listMessage";

const HomeUser = () => (
  <>
    <Header home={true} />
    <div>
      <ListMessagesUserPage />
    </div>
    <div>
      <CardMaintenance />
    </div>
    {}
  </>
);

export default HomeUser;
