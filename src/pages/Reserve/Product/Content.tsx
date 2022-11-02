import { useContext } from "react";
import Hint from "../../../components/Common/Hint";
import { products } from "../../../data/data";
import chevron_left from "../../../images/icons/icon_common_back.png";
import chevron_right from "../../../images/icons/icon_common_to.png";
import { ProductType } from "../../../types/type";
import { Context } from "../../../utils/context";
import { handlePriceCommas } from "../../../utils/handlePriceCommas";
import SlideImg from "./SlideImg";
import Tag from "./Tag";

function Content() {
  const [selectedProducts, setSelectedProducts] =
    useContext(Context)["selectedProducts"];

  function hasStock(products: ProductType[]) {
    return products
      .filter((item) => item.stock > 0)
      .filter((item) => item.model === selectedProducts.model);
  }

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
      .filter((item) => item.model === selectedProducts.model)
      .map((item) => item.color)
      .filter(
        (item, index) =>
          products
            .filter((item) => item.model === selectedProducts.model)
            .map((item) => item.color.name)
            .indexOf(item.name) === index
      )
      .sort();
  }

  function handleDuplicateCapacity(products: ProductType[]): string[] {
    return products
      .filter((item) => item.model === selectedProducts.model)
      .map((item) => item.capacity)
      .filter(
        (item, index) =>
          products
            .filter((item) => item.model === selectedProducts.model)
            .map((item) => item.capacity)
            .indexOf(item) === index
      )
      .sort();
  }

  return (
    <section className="mb-[80px] md:mb-[230px] md:max-w-[1080px] md:justify-between md:mx-auto md:flex md:bg-[#ffffff] md:px-auto md:py-[72px] md:px-[36px] md:border md:shadow-[0px_0px_18px_rgba(0,0,0,0.05)] md:border-solid md:border-borderGray md:rounded-[10px] w-full">
      <div className="md:max-w-[476px] md:flex-auto md:h-[426px]">
        <div className="flex justify-center h-[375px] items-center md:bg-primaryPageBackgroundGray bg-secondaryPageBackgroundGray ">
          {products.map(
            (item, index) =>
              selectedProducts.id === index + 1 && (
                <img
                  src={item.img}
                  alt="productImage"
                  className="md:max-w-none"
                  key={index}
                />
              )
          )}
        </div>
        <div className="hidden md:block mt-3 relative">
          <img
            src={chevron_left}
            alt="imageController"
            className="w-[30px] h-[30px] absolute top-[40%] left-[-30px] cursor-pointer"
          />
          <SlideImg />
          <img
            src={chevron_right}
            alt="imageController"
            className="w-[30px] h-[30px] absolute top-[40%] right-[-30px] cursor-pointer"
          />
        </div>
      </div>

      <div className="p-4 md:px-8 md:py-4">
        <div>
          <div className="text-[#333333] font-medium leading-[23px]">
            Apple {selectedProducts.model}
          </div>
          <div className="mt-[19px] text-primaryRed font-medium leading-[29px] text-xl">
            NT${handlePriceCommas(selectedProducts.price)}
          </div>
          <div className="mt-2 text-primaryRed font-normal text-sm">
            <Hint
              text="登記的手機號碼需與會員手機號碼相同，每人限購一支一經送出商品選項，不得修改"
              fontSize="14px"
            />
          </div>
        </div>

        <div className="mt-[14px]">
          <div className="mb-[15px]">
            <div>選擇型號</div>
            {handleDuplicateModel(products).map((item, index) => (
              <Tag
                text={item}
                key={index}
                hasStock={true}
                onClickFn={() =>
                  setSelectedProducts({
                    model: item,
                    color: "",
                    capacity: "",
                    price: 0,
                    id:
                      item === "iphone 13"
                        ? 6
                        : item === "iphone 13 Pro"
                        ? 1
                        : item === "iphone 13 Pro Max"
                        ? 3
                        : item === "iphone 13 mini"
                        ? 5
                        : 6,
                  })
                }
              />
            ))}
          </div>
          <div className="mb-[15px]">
            <div>選擇色彩</div>
            {handleDuplicateColor(products).map((item, index) => (
              <Tag
                text={item.name}
                color={item.code}
                key={index}
                hasStock={hasStock(products)
                  .map((item) => item.color.name)
                  .includes(item.name)}
                onClickFn={() =>
                  setSelectedProducts({
                    ...selectedProducts,
                    color: item.name,
                  })
                }
              />
            ))}
          </div>
          <div className="mb-[15px]">
            <div>選擇容量</div>
            {handleDuplicateCapacity(products).map((item, index) => (
              <Tag
                text={item}
                key={index}
                hasStock={hasStock(products)
                  .map((item) => item.capacity)
                  .includes(item)}
                onClickFn={() =>
                  setSelectedProducts({ ...selectedProducts, capacity: item })
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
