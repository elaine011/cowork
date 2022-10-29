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
    <div className='px-[14px] py-[9px] bg-white rounded-[5px]'>
      <h3 className='mb-2 text-[10px]'>活動流程 : </h3>
      <div className='flex items-center'>
        {process.map(({ img, text, active }, index) => {
          return (
            <>
              <div className='w-[60px] flex flex-col items-center justify-between'>
                <img src={img} alt='processImg' key={index} />
                <p
                  className={`${
                    active && "text-primaryRed"
                  } flex scale-[0.85] text-[12px]`}>
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
                  className='mx-auto w-[16px] h-[16px]'
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ReserveProcess;
