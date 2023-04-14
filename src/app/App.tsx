import { BrowserRouter } from "react-router-dom";
import SwitchRoutes from "../ui/routes/routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SwitchRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
