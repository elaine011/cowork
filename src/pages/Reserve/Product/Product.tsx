import ReserveFooter from "../../../components/Footers/ReserveFooter";
import Content from "./Content";

function Product() {
  return (
    <>
      <div className="fixed bottom-0 left-0 top-0 right-0 -z-50 md:bg-primaryPageBackgroundGray"></div>
      <div className="md:px-5">
        <h1 className="hidden md:flex text-[64px]  justify-center leading-[80px] mb-[43px] md:mt-[53px]">
          選擇商品
        </h1>
        <Content />
      </div>
      <ReserveFooter
        switchRoute={"/reserve/verified"}
        functionButtonText={"送出"}
        price={32900}
        wrapperContext={"space-between"}
        hint={"一經送出商品選項，不得修改"}
      />
    </>
  );
}

export default Product;
