import { Outlet, useLocation } from "react-router-dom";
import ReserveHeader from "./components/Headers/ReserveHeader";
import SasaHeader from "./components/Headers/SasaHeader";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname.split("/").includes("productDetail") ? (
        <SasaHeader />
      ) : location.pathname.split("/").includes("reserve") ? (
        <ReserveHeader />
      ) : (
        <></>
      )}
      <Outlet />
    </>
  );
}

export default App;
