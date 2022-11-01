import { useContext } from "react";
import { Context } from "../../../utils/context";

type TagProps = {
  text: string;
  color?: string;
  hasStock?: boolean;
  onClickFn?: () => void;
};

function Tag({ text, color, hasStock, onClickFn }: TagProps) {
  const [selectedProducts, setSelectedProducts] =
    useContext(Context)["selectedProducts"];

  return (
    <button
      className={`cursor-pointer inline-flex flex-wrap py-[5px] px-4 border border-solid border-[#d4d9de] rounded-[3px] mr-[10px] mt-[15px] items-center text-[13px] justify-center ${
        hasStock
          ? text === selectedProducts.model ||
            text === selectedProducts.color ||
            text === selectedProducts.capacity
            ? "bg-primaryRed text-[#ffffff]"
            : "bg-[#ffffff]"
          : "bg-[#ececec] text-thirdGray border-opacity-50 cursor-no-drop"
      }`}
      onClick={() => {
        onClickFn && onClickFn();
      }}
      disabled={!hasStock}
    >
      <span>{text}</span>
      {color && (
        <span
          className="w-3 h-3 rounded-full ml-[5px]"
          style={{
            backgroundColor: `${color}`,
            opacity: hasStock ? "1" : "0.5",
          }}
        ></span>
      )}
    </button>
  );
}
export default Tag;
