import { useState } from "react";
import { images, products } from "../../../data/data";
import chevron_left from "../../../images/icons/icon_common_back.png";
import chevron_right from "../../../images/icons/icon_common_to.png";
import { ProductType } from "../../../types/type";
import { handlePriceCommas } from "../../../utils/handlePriceCommas";
import SlideImg from "./SlideImg";
import Tag from "./Tag";

function Content() {
  const [productId, setProductId] = useState(1);

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
    <section className="md:max-w-[1080px] md:justify-between md:mx-auto md:flex md:min-w-[803px] md:bg-[#ffffff] md:px-auto md:py-[72px] md:px-[36px] md:border md:shadow-[0px_0px_18px_rgba(0,0,0,0.05)] md:border-solid md:border-borderGray md:rounded-[10px]">
      <div className="md:max-w-[476px] md:flex-auto md:h-[426px]">
        <div className="flex justify-center h-[375px] items-center md:bg-primaryPageBackgroundGray bg-secondaryPageBackgroundGray ">
          {images.map((img, index) =>
            productId === index + 1 ? (
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
        <div className="hidden md:block mt-3 relative">
          <img
            src={chevron_left}
            className="w-[30px] h-[30px] absolute top-[40%] left-[-30px]"
          ></img>
          <SlideImg />
          <img
            src={chevron_right}
            className="w-[30px] h-[30px] absolute top-[40%] right-[-30px]"
          ></img>
        </div>
      </div>

      <div className="p-4 md:w-[460px] md:px-8 md:py-4">
        {products.map((item, index) =>
          productId === index + 1 ? (
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
