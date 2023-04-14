import SwitchRoutes from "./ui/routes/routes";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

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
