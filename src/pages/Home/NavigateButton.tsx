import React from "react";
import { useNavigate } from "react-router-dom";

type PropsType = {
  text: string;
  navigateTarget: string;
};

function NavigateButton({ text, navigateTarget }: PropsType) {
  const navigate = useNavigate();

  return (
    <>
      <button
        className='text-[24px] hover:underline hover:text-primaryBlue'
        onClick={() => navigate(navigateTarget)}>
        {text}
      </button>
    </>
  );
}

export default NavigateButton;
