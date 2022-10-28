import { Outlet } from "react-router-dom";
import ReserveHeader from "./components/Headers/ReserveHeader";
function App() {
  return (
    <>
      <ReserveHeader />
      <Outlet />
    </>
  );
}

export default App;
