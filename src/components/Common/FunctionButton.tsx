type PropsType = {
  text: string;
  fontSize?: string;
  textColor: string;
  textPosition: "center" | "right" | "left";
  bgColor: string;
  letterSpacing?: number;
  width: string;
  clickFn?: () => void;
};
function FunctionButton({
  text,
  fontSize,
  textColor,
  textPosition,
  bgColor,
  letterSpacing,
  width,
  clickFn,
}: PropsType) {
  return (
    <button
      style={{
        color: textColor,
        textAlign: textPosition,
        fontSize: fontSize,
        backgroundColor: bgColor,
        letterSpacing: letterSpacing ? `${letterSpacing}px` : "unset",
        width: width === "full" ? "100%" : `${width}px`,
      }}
      form="userInfo"
      className="px-[20px] py-[10px] rounded-[5px] md:text-[20px]"
      onClick={clickFn ? () => clickFn() : () => {}}>
      {text}
    </button>
  );
}

export default FunctionButton;
