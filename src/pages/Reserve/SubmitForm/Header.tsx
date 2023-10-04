import Hint from "../../../components/Common/Hint";

function Header() {
  return (
    <header className="bg-primaryPageBackgroundGray px-[17px] text-center pb-[20px] pt-[30px]">
      <h1 className="text-[24px] font-bold mb-[10px] md:hidden">
        立即登記！搶先擁有 iPhone 13
      </h1>
      <h1 className="text-[48px] font-bold mb-[66px] hidden md:block">
        iPhone新機搶先登記
      </h1>
      <p className="md:hidden text-[14px] text-primaryGray">
        預約時間：2021/9/17 13:00:00~ 2021/9/20 12:59:59
      </p>
      <p className="hidden md:block text-[24px] font-medium">
        活動日期：即日起 - 9/21
      </p>
      <div className="mb-[5px] md:mb-[60px]">
        <Hint text="登記的手機號碼需與會員手機號碼相同，每人限購一支" />
      </div>
      <button className="md:hidden text-primaryBlue hover:underline">
        {"加碼贈品與活動說明 >"}
      </button>
    </header>
  );
}

export default Header;
