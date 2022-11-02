import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Landing from "./pages/Reserve/Landing/Landing";
import Product from "./pages/Reserve/Product/Product";
import SubmitForm from "./pages/Reserve/SubmitForm/SubmitForm";
import Verified from "./pages/Reserve/Verified/Verified";

import reportWebVitals from "./reportWebVitals";

import SasaHeader from "./components/Headers/SasaHeader";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="reserve" element={<Landing />} />
        <Route path="reserve/product" element={<Product />} />
        <Route path="reserve/submitForm" element={<SubmitForm />} />
        <Route path="reserve/verified" element={<Verified />} />
        <Route path="sasa" element={<SasaHeader />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
