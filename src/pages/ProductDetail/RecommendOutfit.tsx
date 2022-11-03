import outfit_01 from "../../images/productDetail/outfit_01.png";
import outfit_02 from "../../images/productDetail/outfit_02.png";
import outfit_03 from "../../images/productDetail/outfit_03.png";
import outfit_04 from "../../images/productDetail/outfit_04.png";
import outfit_05 from "../../images/productDetail/outfit_05.png";

type PropsType = {
  title: string;
};
const outfitImages = [
  outfit_01,
  outfit_02,
  outfit_03,
  outfit_01,
  outfit_05,
  outfit_03,
];

function RecommendOutfit({ title }: PropsType) {
  return (
    <div className="mb-[40px]">
      <h3 className="mb-[14px] font-normal">{title}</h3>
      <ul className="flex gap-[16px]">
        {outfitImages.map((img, index) => {
          return (
            <li
              key={index}
              className="hover:opacity-[0.6] cursor-pointer overflow-hidden transition-all duration-300">
              <img src={img} alt="outfit" className="hover:scale-[1.1]" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecommendOutfit;
