import Product_01 from "../../../images/reserve-products/product_01.png";
import Product_02 from "../../../images/reserve-products/product_02.png";
import Product_03 from "../../../images/reserve-products/product_03.png";
import Product_04 from "../../../images/reserve-products/product_04.png";
import Product_05 from "../../../images/reserve-products/product_05.png";
import Product_06 from "../../../images/reserve-products/product_06.png";
import Product_07 from "../../../images/reserve-products/product_07.png";
import Product_08 from "../../../images/reserve-products/product_08.png";
import Product_09 from "../../../images/reserve-products/product_09.png";

function SlideImg() {
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
  return (
    <div>
      {images.map((img) => (
        <img src={img.src} />
      ))}
    </div>
  );
}
export default SlideImg;
