import Header from "../../Components/Header/header";
import { ListMessagesUserPage } from "../../Components/ListMessagesUser/listMessage";

const HomeUser = () => (
  <>
    <Header home={true} />
    <div>
      <ListMessagesUserPage />
    </div>
    <div>
    </div>
    {}
  </>
);

export default HomeUser;
