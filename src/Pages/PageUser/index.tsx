import Header from "../../Components/Header/header";
import { ListMessagesUserPage } from "../../Components/ListMessagesUser/listMessage";

const HomeUser = () => (
  <>
    <Header home={true} />
    <main>
      <section>
        <h2>Quadro de recados</h2>
        <ListMessagesUserPage />
      </section>
      <aside>
        <CardMaintenance />
      </aside>
    </main>

  </>
);

export default HomeUser;
