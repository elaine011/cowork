import FunctionButton from "../Common/FunctionButton";

type PropsType = {
  functionButtonText: string;
  price?: number;
  wrapperContext?: "space-between" | "flex-start" | "center";
  hint?: string;
  clickFn?: () => void;
};
function ReserveFooter({
  price,
  wrapperContext,
  functionButtonText,
  hint,
  clickFn,
}: PropsType) {
  return (
    <footer
      className={`text-center fixed border-t-[2px] border-solid border-borderGray bg-white bottom-0 left-0 right-0 ${
        hint ? "py-[5px]" : "py-[14px]"
      } px-[14px]`}
    >
      <div className="max-w-[1080px] mx-auto">
        <div className="flex" style={{ justifyContent: wrapperContext }}>
          {hint && (
            <p className="text-[20px] mb-[5px] text-primaryRed">{hint}</p>
          )}
          {price !== undefined && (
            <p className="text-[20px] mb-[5px] text-primaryRed">NT.{price}</p>
          )}
        </div>

        <FunctionButton
          text={functionButtonText}
          textColor={"white"}
          textPosition={"center"}
          bgColor={"#ff5353"}
          letterSpacing={2}
          width={"full"}
          clickFn={clickFn}
        />
      </div>
    </footer>
  );
}

export default ReserveFooter;
