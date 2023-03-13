import { HomeProvider } from "./Contexts/homeContext";
import { ResidentProvider } from "./Contexts/residentContext";
import { Router } from "./routes";

import { UserProvider } from "./Contexts/userContext";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />

      <UserProvider>
        <ResidentProvider>
          <HomeProvider>
            <Router />
          </HomeProvider>
        </ResidentProvider>
      </UserProvider>
    </>
  );
}
export default App;
