import Header from "./Header";
import ReserveProcess from "./ReserveProcess";
import productsAll from "../../../images/reserve-products/all.png";
import ActivityStatement from "../../../components/Common/ActivityStatement";
import FunctionButton from "../../../components/Common/FunctionButton";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <div className='fixed right-0 left-0 top-0 bottom-0 bg-secondaryPageBackgroundGray z-[-50]'></div>
      <main className='md:pt-[144px] max-w-[1100px] mx-auto bg-secondaryPageBackgroundGray px-[10px]'>
        <div className='md:flex md:mb-[126px] items-center justify-between'>
          <div className='md:order-2 md:w-[572px]'>
            <Header />
            <ReserveProcess />
          </div>
          <div className='md:order-1 md:ml-[2vw]'>
            <img src={productsAll} alt='carouselImg' className='w-[374px]' />
          </div>
        </div>

        <div className='mb-[100px]'>
          <ActivityStatement />
        </div>
        <div className='fixed bg-white bottom-0 left-0 right-0 p-[15px]'>
          <FunctionButton
            text={"搶先登記"}
            textColor={"white"}
            textPosition={"center"}
            bgColor={"#ff5353"}
            letterSpacing={2}
            width={"full"}
            clickFn={() => navigate("/reserve/submitForm")}
          />
        </div>
      </main>
    </>
  );
}

export default Landing;
