import { useEffect, useState } from "react";
import ReserveFooter from "../../../components/Footers/ReserveFooter";
import { products } from "../../../data/data";
import { Context } from "../../../utils/context";
import Content from "./Content";

function Product() {
  const [selectedProducts, setSelectedProducts] = useState({
    model: "iphone 13",
    color: "",
    capacity: "",
    price: 0,
    id: 6,
  });
  console.log(selectedProducts.id);

  useEffect(() => {
    const product = products.filter(
      (item) =>
        item.model === selectedProducts.model &&
        item.capacity === selectedProducts.capacity
    );
    const productId = products.filter(
      (item) => item.model === selectedProducts.model
    );
    setSelectedProducts({
      ...selectedProducts,
      price: product.length !== 0 ? product[0].price : 0,
      id:
        productId.length !== 0 && selectedProducts.color === ""
          ? productId[0].id
          : selectedProducts.color !== ""
          ? productId.filter(
              (item) => item.color.name === selectedProducts.color
            )[0].id
          : 6,
    });
  }, [
    selectedProducts.model,
    selectedProducts.color,
    selectedProducts.capacity,
  ]);

  return (
    <Context.Provider
      value={{ selectedProducts: [selectedProducts, setSelectedProducts] }}
    >
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
        price={selectedProducts.price}
        wrapperContext={"space-between"}
        hint={"一經送出商品選項，不得修改"}
      />
    </Context.Provider>
  );
}

export default Product;
