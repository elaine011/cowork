import React from "react";
import FunctionButton from "../Common/FunctionButton";
import { useNavigate } from "react-router-dom";

type PropsType = {
  switchRoute: string;
  functionButtonText: string;
};
function ReserveFooter({ switchRoute, functionButtonText }: PropsType) {
  const navigate = useNavigate();
  return (
    <footer className='fixed border-t-[2px] border-solid border-borderGray bg-white bottom-0 left-0 right-0 p-[15px]'>
      <FunctionButton
        text={functionButtonText}
        textColor={"white"}
        textPosition={"center"}
        bgColor={"#ff5353"}
        letterSpacing={2}
        width={"full"}
        clickFn={() => navigate(switchRoute)}
      />
    </footer>
  );
}

export default ReserveFooter;
