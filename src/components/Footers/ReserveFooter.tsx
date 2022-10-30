import React from "react";
import FunctionButton from "../Common/FunctionButton";
import { useNavigate } from "react-router-dom";

type PropsType = {
  switchRoute: string;
  functionButtonText: string;
  hint?: string;
  hintPos?: "left" | "right" | "center";
};
function ReserveFooter({
  switchRoute,
  functionButtonText,
  hint,
  hintPos,
}: PropsType) {
  const navigate = useNavigate();
  return (
    <footer
      className={`text-center fixed border-t-[2px] border-solid border-borderGray bg-white bottom-0 left-0 right-0 ${
        hint ? "py-[5px]" : "py-[14px]"
      } px-[14px]`}>
      <div className='max-w-[1080px] mx-auto'>
        {hint && (
          <p
            style={{ textAlign: hintPos }}
            className='text-[20px] mb-[5px] text-primaryRed'>
            {hint}
          </p>
        )}
        <FunctionButton
          text={functionButtonText}
          textColor={"white"}
          textPosition={"center"}
          bgColor={"#ff5353"}
          letterSpacing={2}
          width={"full"}
          clickFn={() => navigate(switchRoute)}
        />
      </div>
    </footer>
  );
}

export default ReserveFooter;
