import React from "react";
import favorite from "../../images/productDetail/favorite.png";
import cartGray from "../../images/productDetail/ic_shopnav_cart.png";
import ProductLabel from "./ProductLabel";

type PropsType = {
  image: string;
  name: string;
  title: string;
  originalPrice: number;
  afterDiscount: number;
  status: string;
  borderNone: boolean;
};

function ProductCard({
  image,
  name,
  title,
  borderNone,
  originalPrice,
  status,
  afterDiscount,
}: PropsType) {
  return (
    <li
      className={`flex py-[20px] gap-[16px] items-start ${
        borderNone ? "border-b-0" : "border-b "
      } border-solid border-[#e5e5e5]`}>
      <div className="relative">
        {status !== "販售中" && (
          <ProductLabel
            status={status}
            posLeft={status === "即將開賣" ? "10px" : "18px"}
            posBottom="13px"
          />
        )}
        <div
          className={`${
            status === "已售完"
              ? "cursor-no-drop"
              : "cursor-pointer overflow-hidden transition-all duration-300 hover:opacity-60"
          } w-[108px]`}>
          <img
            src={image}
            alt="product_image"
            className={`w-[108px] max-w-[unset] mr-[17px] ${
              status === "已售完" ? "" : "hover:scale-[1.1]"
            } `}
          />
        </div>
      </div>
      <div>
        <h3 className="text-thirdGray text-[14px]">{title}</h3>
        <h2 className="text-[14px] mb-[30px] line-clamp-2 cursor-pointer hover:text-primaryBrown">
          {name}
        </h2>
        <div className="flex justify-between">
          <div>
            <span className="text-[12px] text-thirdGray line-through">
              NT${originalPrice}
            </span>
            <p className="text-[16px] text-[#ff655d]">NT${afterDiscount}</p>
          </div>
          <div className="flex items-end mb-[5px] gap-[12px]">
            <img
              src={favorite}
              alt="favorite_image"
              className="hover:cursor-pointer"
            />
            <img
              src={cartGray}
              alt="cart_image"
              className="hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
