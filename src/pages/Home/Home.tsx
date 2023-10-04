import logo from "../../images/icons/logo.png";
import SasaLogo from "../../images/productDetail/Logo.png";
import productDetailPage from "../../images/productDetail/productDetailPage.jpg";
import reservePage from "../../images/reserve-products/reservePage.jpg";
import NavigateCard from "./NavigateCard";

function Home() {
  const titleText = "請選擇想去的頁面...";

  return (
    <div className="flex flex-col gap-[50px] justify-center bg-gradient-to-t min-h-[100vh] from-[#e0eafc] to-[#cfdef3] pb-[100px]">
      <h1 className="text-center text-[32px] font-medium md:text-[48px]">
        {titleText.split("").map((text, index) => (
          <span
            className="animate-lighting"
            key={index}
            style={{ animationDelay: `${150 + 150 * index}ms` }}>
            {text}
          </span>
        ))}
      </h1>
      <div className="flex gap-[150px] pt-10 justify-center flex-wrap">
        <NavigateCard
          text={"點我去搶購頁面"}
          navigateTarget={"reserve"}
          logoImg={logo}
          bgImg={reservePage}
        />
        <NavigateCard
          text={"點我去Sasa page"}
          navigateTarget={"productDetail"}
          logoImg={SasaLogo}
          bgImg={productDetailPage}
        />
      </div>
    </div>
  );
}

export default Home;
