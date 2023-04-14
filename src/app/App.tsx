import MainLayout from "@/components/layouts/main_layout/main_layout";
import SwitchRoutes from "../ui/routes/routes";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useRouterController } from "@/common/hooks/router_controller";

function App() {
  const { isLoading } = useRouterController();
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout isLoadingRoute={isLoading}>
          <SwitchRoutes />
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
