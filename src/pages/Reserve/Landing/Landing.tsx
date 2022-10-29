import Header from "./Header";
import ReserveProcess from "./ReserveProcess";
import productsAll from "../../../images/reserve-products/all.png";
import ActivityStatement from "../../../components/Common/ActivityStatement";

function Landing() {
  return (
    <div className='bg-secondaryPageBackgroundGray px-[10px]'>
      <Header />
      <ReserveProcess />
      <img src={productsAll} alt='carouselImg' />
      <ActivityStatement />
    </div>
  );
}

export default Landing;
