import { useNavigate } from "react-router-dom";
import FunctionButton from "../Common/FunctionButton";

type PropsType = {
  switchRoute?: string;
  functionButtonText: string;
  price?: number;
  wrapperContext?: "space-between" | "flex-start" | "center";
  hint?: string;
  showAlertBox?: () => boolean;
};
function ReserveFooter({
  switchRoute,
  price,
  wrapperContext,
  functionButtonText,
  hint,
  showAlertBox,
}: PropsType) {
  const navigate = useNavigate();
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
          clickFn={() =>
            showAlertBox &&
            showAlertBox() &&
            switchRoute &&
            navigate(switchRoute)
          }
        />
      </div>
    </footer>
  );
}

export default ReserveFooter;
