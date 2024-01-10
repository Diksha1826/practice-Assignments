import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Mainroutes from "./Components/Routes/MainRoutes";
import { AuthContextProvider } from "./Components/context/AuthContext";
function App() {
  return (
    <div className="App">
    <AuthContextProvider>
    <BrowserRouter>
    <Mainroutes/>
    </BrowserRouter>
    </AuthContextProvider>
    </div>
  );
}
export default App;

