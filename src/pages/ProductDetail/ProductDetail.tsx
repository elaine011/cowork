import ProductDetailFooter from "../../components/Footers/ProductDetailFooter";
import outfit_01 from "../../images/productDetail/outfit_01_big.png";
import product_01 from "../../images/productDetail/product_01.png";
import product_02 from "../../images/productDetail/product_02.png";
import product_03 from "../../images/productDetail/product_03.png";
import product_04 from "../../images/productDetail/product_04.png";
import ProductCard from "./ProductCard";
import RecommendOutfit from "./RecommendOutfit";
import SasaSideBar from "../../components/Common/SasaSideBar";

const productCard = [
  {
    img: product_01,
    status: "即將開賣",
    title: "niko and ...",
    name: "LOWRYS FARM素色飄逸垂墜感修身百褶長裙-三色",
    originalPrice: 5,
    afterDiscount: 200,
  },
  {
    img: product_04,
    status: "已售完",
    title: "niko and ...",
    name: "LEPSIM【官網獨享價】腰部鬆緊薄料長裙-四色",
    originalPrice: 5,
    afterDiscount: 200,
  },
  {
    img: product_02,
    status: "販售中",
    title: "niko and ...",
    name: "丹寧帆布托特包 手提肩背兩用 文青風",
    originalPrice: 5,
    afterDiscount: 200,
  },
  {
    img: product_03,
    status: "販售中",
    title: "niko and ...",
    name: "女限定款素面簡約拉鍊後背包-三色",
    originalPrice: 5,
    afterDiscount: 200,
  },
];

const breadcrumbs = [
  { title: "首頁", next: true },
  { title: "日本穿搭", next: true },
  { title: "穿搭介紹", next: false },
];

function ProductDetail() {
  return (
    <>
      <main className="max-w-[1170px] mx-auto pb-[320px]">
        <div className="text-primaryBrown flex gap-[5px]">
          {breadcrumbs.map(({ title, next }, index) => {
            return (
              <div key={index}>
                <span className="mr-[5px]">{title}</span>
                {next && <span>{">"}</span>}
              </div>
            );
          })}
        </div>
        <div className="flex pt-[14px]">
          <SasaSideBar />
          <div className="max-w-[880px]">
            <div className="flex gap-[17px]">
              <img src={outfit_01} alt="" className="w-[528px] h-[703px]" />
              <div>
                <h1 className="text-[20px] font-medium">
                  柏高島屋ステーションモール店
                </h1>
                <p className="text-[14px]">GLOBAL WORK</p>
                <span className="block text-[14px] mb-[30px]">152cm</span>
                <h3 className="text-[16px]">穿著單品</h3>
                <ul className="w-[335px] ml-5">
                  {productCard.map(
                    (
                      {
                        img,
                        status,
                        title,
                        name,
                        originalPrice,
                        afterDiscount,
                      },
                      index
                    ) => {
                      return (
                        <ProductCard
                          image={img}
                          name={name}
                          title={title}
                          originalPrice={originalPrice}
                          afterDiscount={afterDiscount}
                          status={status}
                          borderNone={index === productCard.length - 1}
                          key={index}
                        />
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
            <RecommendOutfit title="此店員其他穿搭" />
            <RecommendOutfit title="其他穿搭推薦" />
          </div>
        </div>
      </main>
      <ProductDetailFooter />
    </>
  );
}

export default ProductDetail;
