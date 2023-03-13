import Header from "../Components/Header/header";

const LandingPage = () => {
  return (
    <>
      {
        <>
          <Header home={false} />
          <div>
            <p>
              O Aplicativo que facilita sua comunicacao dentro do seu condiminio
            </p>
            <p>Fique atualizado sobre os comunicados em primeira mao</p>
          </div>
        </>
      }
    </>
  );
};

export default LandingPage;
