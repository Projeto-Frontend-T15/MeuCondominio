import { Router } from "./routes";
import { GlobalStyles } from "./Styles/global";

function App() {
  return (
    <>
      <GlobalStyles />

      <ResidentProvider>
        <HomeProvider>
          <Route />
        </HomeProvider>
      </ResidentProvider>
    </>
  );
}
export default App;
