import React from "react";

type PropsType = {
  text: string;
  textColor: string;
  textPosition: "center" | "right" | "left";
  bgColor: string;
  letterSpacing?: number;
  width: string;
};
function FunctionButton({
  text,
  textColor,
  textPosition,
  bgColor,
  letterSpacing,
  width,
}: PropsType) {
  return (
    <button
      style={{
        color: textColor,
        textAlign: textPosition,
        backgroundColor: bgColor,
        letterSpacing: letterSpacing ? `${letterSpacing}px` : "unset",
        width: width === "full" ? "100%" : `${width}px`,
      }}
      className='px-[20px] py-[10px] rounded-[5px]'>
      {text}
    </button>
  );
}

export default FunctionButton;
