import React from "react";
import register from "../../../images/icons/registerInfo.png";
import timer from "../../../images/icons/timer.png";
import check from "../../../images/icons/check.png";
import cart from "../../../images/icons/cart.png";
import chevron from "../../../images/icons/chevron.png";

const process = [
  { img: register, text: "填寫登記資料", active: false },
  { img: timer, text: "等待審核驗證", active: false },
  { img: check, text: "確認驗證通過", active: true },
  { img: cart, text: "開賣日購買", active: false },
];
function ReserveProcess() {
  return (
    <div className='md:max-w-[571px] px-[14px] py-[9px] bg-white rounded-[5px]'>
      <h3 className='mb-2 text-[10px] md:text-[16px]'>活動流程 : </h3>
      <div className='flex'>
        {process.map(({ img, text, active }, index) => {
          return (
            <div
              className={`flex items-center ${
                index === process.length - 1 ? "" : "grow"
              }`}
              key={index}>
              <div className='md:w-[97px] w-[60px] flex flex-col items-center justify-between'>
                <img
                  src={img}
                  alt='processImg'
                  key={`${index}-${text}}`}
                  className='md:w-[53px]'
                />
                <p
                  className={`${
                    active && "text-primaryRed"
                  } flex scale-[0.85] text-[12px] md:text-[14.5px]`}>
                  <span>{index + 1}.</span>
                  <span className='whitespace-nowrap'>{text}</span>
                </p>
              </div>
              <div
                className={`${
                  index === process.length - 1 ? "hidden" : ""
                } grow mt-[-20px]`}>
                <img
                  src={chevron}
                  alt='arrowImg'
                  className='mx-auto md:min-w-[26px] md:h-[26px] w-[16px] h-[16px]'
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReserveProcess;
