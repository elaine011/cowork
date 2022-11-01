import React from "react";

type PropsType = {
  text: string;
};
function ValidationErrorText({ text }: PropsType) {
  return <span className="text-[13px] text-primaryRed py-2 block">{text}</span>;
}

export default ValidationErrorText;
