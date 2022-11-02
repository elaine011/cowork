import React from "react";
import ProductCard from "./ProductCard";
import product_01 from "../../images/productDetail/product_01.png";
import product_02 from "../../images/productDetail/product_02.png";
import product_03 from "../../images/productDetail/product_03.png";
import product_04 from "../../images/productDetail/product_04.png";
import outfit_01 from "../../images/productDetail/outfit_01_big.png";

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
    name: "LOWRYS FARM素色飄逸垂墜感修身百褶長裙-三色",
    originalPrice: 5,
    afterDiscount: 200,
  },
  {
    img: product_02,
    status: "販售中",
    title: "niko and ...",
    name: "LOWRYS FARM素色飄逸垂墜感修身百褶長裙-三色",
    originalPrice: 5,
    afterDiscount: 200,
  },
  {
    img: product_03,
    status: "販售中",
    title: "niko and ...",
    name: "LOWRYS FARM素色飄逸垂墜感修身百褶長裙-三色",
    originalPrice: 5,
    afterDiscount: 200,
  },
];

function ProductDetail() {
  return (
    <div className="max-w-[880px] flex pt-[30px] gap-[17px] mx-auto">
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
              { img, status, title, name, originalPrice, afterDiscount },
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
  );
}

export default ProductDetail;
