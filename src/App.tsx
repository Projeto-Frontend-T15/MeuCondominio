import { HomeProvider } from "./Contexts/homeContext";
import { ResidentProvider } from "./Contexts/residentContext";
import { Router } from "./routes";
import { GlobalStyles } from "./styles/global";


function App() {
  return (
    <>
      <GlobalStyles />

      <ResidentProvider>
        <HomeProvider>
          <Router />
        </HomeProvider>
      </ResidentProvider>
    </>
  );
}
export default App;
