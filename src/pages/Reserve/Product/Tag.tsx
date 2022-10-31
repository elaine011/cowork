import { useContext, useState } from "react";
import { Context } from "../../../utils/context";

type TagProps = {
  text: string;
  color?: string;
  onClickFn?: () => void;
};

function Tag({ text, color, onClickFn }: TagProps) {
  const [isActive, setIsActive] = useState("");
  const [selectedProducts, setSelectedProducts] =
    useContext(Context)["selectedProducts"];

  return (
    <div
      className={`cursor-pointer inline-flex flex-wrap py-[5px] px-4 border border-solid border-[#d4d9de] rounded-[3px] mr-[10px] mt-[15px] items-center text-[13px] justify-center ${
        isActive === ""
          ? "bg-[#ffffff]"
          : isActive === selectedProducts.model ||
            isActive === selectedProducts.color ||
            isActive === selectedProducts.capacity
          ? "bg-primaryRed text-[#ffffff]"
          : "bg-[#ffffff]"
      }`}
      onClick={() => {
        setIsActive(text);
        onClickFn && onClickFn();
      }}
    >
      <span>{text}</span>
      {color && (
        <span
          className="w-3 h-3 rounded-full ml-[5px]"
          style={{
            backgroundColor: `${color}`,
          }}
        ></span>
      )}
    </div>
  );
}
export default Tag;
