import { useContext } from "react";
import { products } from "../../../data/data";
import { ProductType } from "../../../types/type";
import { Context } from "../../../utils/context";

function SlideImg() {
  const [selectedProducts, setSelectedProducts] =
    useContext(Context)["selectedProducts"];

  function handleSlideImg(products: ProductType[]) {
    return products.filter((item) => item.model === selectedProducts.model);
  }

  return (
    <div className="flex gap-[3px]">
      {handleSlideImg(products).map(
        (item, index) =>
          item.img !== "" && (
            <div key={index}>
              <img
                src={item.img}
                alt="productImage"
                className="bg-primaryPageBackgroundGray w-[82px] cursor-pointer"
                onClick={() =>
                  setSelectedProducts({ ...selectedProducts, id: item.id })
                }
              />
            </div>
          )
      )}
    </div>
  );
}
export default SlideImg;
