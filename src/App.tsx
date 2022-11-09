import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ReserveHeader from "./components/Headers/ReserveHeader";
import SasaHeader from "./components/Headers/SasaHeader";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.href === "http://localhost:3000/reserve/verified") {
      window.addEventListener(
        "popstate",
        function popState() {
          if (
            window.location.href === "http://localhost:3000/reserve/product"
          ) {
            sessionStorage.clear();
            navigate("/reserve");
            window.removeEventListener("popstate", popState);
          }
        },
        false
      );
    }
  }, [location.pathname]);
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
