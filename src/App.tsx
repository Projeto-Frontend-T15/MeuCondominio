import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HomeProvider } from "./Contexts/homeContext";
import { ResidentProvider } from "./Contexts/residentContext";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <ResidentProvider children={undefined}>
        <HomeProvider children={undefined}>
          <Route />
        </HomeProvider>
      </ResidentProvider>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
}
export default App;
