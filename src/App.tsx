import { ToastContainer } from "react-toastify";
import { HomeProvider } from "./Contexts/homeContext";
import { ResidentProvider } from "./Contexts/residentContext";
import Router from "./routes";
import { GlobalStyles } from "./Styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <ResidentProvider>
        <HomeProvider>
          <Router />
        </HomeProvider>
      </ResidentProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
export default App;
