import { useState } from "react";
import { products } from "../../../data/data";
import Product_01 from "../../../images/reserve-products/product_01.png";
import Product_02 from "../../../images/reserve-products/product_02.png";
import Product_03 from "../../../images/reserve-products/product_03.png";
import Product_04 from "../../../images/reserve-products/product_04.png";
import Product_05 from "../../../images/reserve-products/product_05.png";
import Product_06 from "../../../images/reserve-products/product_06.png";
import Product_07 from "../../../images/reserve-products/product_07.png";
import Product_08 from "../../../images/reserve-products/product_08.png";
import Product_09 from "../../../images/reserve-products/product_09.png";
import { ProductType } from "../../../types/type";
import { handlePriceCommas } from "../../../utils/handlePriceCommas";
import SlideImg from "./SlideImg";
import Tag from "./Tag";

function Content() {
  const [productId, setProductId] = useState(0);
  const images = [
    { id: 1, src: Product_01 },
    { id: 2, src: Product_02 },
    { id: 3, src: Product_03 },
    { id: 4, src: Product_04 },
    { id: 5, src: Product_05 },
    { id: 6, src: Product_06 },
    { id: 7, src: Product_07 },
    { id: 8, src: Product_08 },
    { id: 9, src: Product_09 },
  ];

  function handleDuplicateModel(products: ProductType[]): string[] {
    return products
      .map((item) => item.model)
      .filter(
        (item, index) =>
          products.map((item) => item.model).indexOf(item) === index
      )
      .sort();
  }

  function handleDuplicateColor(products: ProductType[]) {
    return products
      .map((item) => item.color)
      .filter(
        (item, index) =>
          products.map((item) => item.color.name).indexOf(item.name) === index
      )
      .sort();
  }

  function handleDuplicateCapacity(products: ProductType[]): string[] {
    return products
      .map((item) => item.capacity)
      .filter(
        (item, index) =>
          products.map((item) => item.capacity).indexOf(item) === index
      )
      .sort();
  }

  return (
    <section className="md:max-w-[1080px] md:justify-between md:mx-auto md:flex md:min-w-[803px] md:bg-[#ffffff] md:px-auto md:py-[72px] md:px-[36px]">
      <div className="md:max-w-[476px] md:flex-auto md:h-[426px]">
        <div className="flex justify-center h-[375px] items-center md:bg-primaryPageBackgroundGray bg-secondaryPageBackgroundGray ">
          {images.map((img, index) =>
            productId === index ? (
              <img
                src={img.src}
                alt="productImage"
                className="md:max-w-none"
                key={index}
              />
            ) : (
              <></>
            )
          )}
        </div>
        <div className="hidden md:block mt-3">
          <SlideImg />
        </div>
      </div>
      <div className="p-4 md:w-[460px]">
        {products.map((item, index) =>
          productId === index ? (
            <div>
              <div className="text-[#333333] font-medium leading-[23px]">
                {item.title}
              </div>
              <div className="mt-[19px] text-primaryRed font-medium leading-[29px] text-xl">
                NT${handlePriceCommas(item.price)}
              </div>
              <div className="mt-2 text-primaryRed font-normal text-sm">
                登記的手機號碼需與會員手機號碼相同，每人限購一支
                一經送出商品選項，不得修改
              </div>
            </div>
          ) : (
            <></>
          )
        )}
        <div className="mt-[14px]">
          <div className="mb-[15px]">
            <div>選擇型號</div>
            {handleDuplicateModel(products).map((item) => (
              <Tag text={item} color={""} />
            ))}
          </div>
          <div className="mb-[15px]">
            <div>選擇色彩</div>
            {handleDuplicateColor(products).map((item) => (
              <Tag text={item.name} color={item.code} />
            ))}
          </div>
          <div className="mb-[15px]">
            <div>選擇容量</div>
            {handleDuplicateCapacity(products).map((item) => (
              <Tag text={item} color={""} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
