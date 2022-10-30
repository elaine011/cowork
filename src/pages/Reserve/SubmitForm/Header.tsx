import React from "react";
import Hint from "../../../components/Common/Hint";

function Header() {
  return (
    <header className='bg-primaryPageBackgroundGray px-[17px] text-center pb-[20px] pt-[30px]'>
      <h1 className='text-[24px] font-bold mb-[10px]'>
        立即登記！搶先擁有 iPhone 13
      </h1>
      <p className='text-[14px] text-primaryGray'>
        預約時間：2021/9/17 13:00:00~ 2021/9/20 12:59:59
      </p>
      <div className='mb-[5px]'>
        <Hint text={"登記的手機號碼需與會員手機號碼相同，每人限購一支"} />
      </div>
      <button className='text-primaryBlue hover:underline'>
        {"加碼贈品與活動說明 >"}
      </button>
    </header>
  );
}

export default Header;
