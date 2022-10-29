import { useState } from "react";

type TagProps = {
  text: string;
  color: string;
};
function Tag({ text, color }: TagProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`cursor-pointer inline-flex flex-wrap py-[5px] px-4 border border-solid border-[#d4d9de] rounded-[3px] mr-[10px] mt-[15px] items-center justify-center ${
        isActive ? "bg-primaryRed text-[#ffffff]" : "bg-[#ffffff]"
      }`}
      onClick={() => setIsActive(!isActive)}
    >
      <span>{text}</span>
      {color ? (
        <span
          className="w-3 h-3 rounded-full ml-[5px]"
          style={{
            backgroundColor: `${color}`,
          }}
        ></span>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Tag;
