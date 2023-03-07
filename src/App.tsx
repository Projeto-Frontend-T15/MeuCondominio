import { Route, Router, RouterProvider } from "react-router-dom";
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
    </>
  );
}
export default App;
