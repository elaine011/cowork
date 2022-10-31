import ActivityStatement from "../../../components/Common/ActivityStatement";
import ReserveFooter from "../../../components/Footers/ReserveFooter";
import productsAll from "../../../images/reserve-products/all_02.png";
import Header from "./Header";
import ReserveProcess from "./ReserveProcess";

function Landing() {
  return (
    <>
      <div className="fixed right-0 left-0 top-0 bottom-0 bg-secondaryPageBackgroundGray z-[-50]"></div>
      <main className="md:pt-[144px] max-w-[1100px] mx-auto bg-secondaryPageBackgroundGray px-[10px]">
        <div className="md:pt-[144px] max-w-[1100px] mx-auto px-[10px]">
          <div className="md:flex md:mb-[126px] items-center justify-between">
            <div className="md:order-2 md:w-[572px]">
              <Header />
              <ReserveProcess />
            </div>
            <div className="md:order-1 md:ml-[2vw]">
              <img src={productsAll} alt="carouselImg" className="w-[374px]" />
            </div>
          </div>

          <div className="mb-[100px]">
            <ActivityStatement />
          </div>
        </div>
      </main>
      <ReserveFooter
        switchRoute={"/reserve/submitForm"}
        functionButtonText={"搶先登記"}
      />
    </>
  );
}

export default Landing;
