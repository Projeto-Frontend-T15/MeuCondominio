import { CardMaintenance } from "../../Components/CardMaintenance/cardMaintenance";
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
