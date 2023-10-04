import Hint from "../../../components/Common/Hint";

function Header() {
  return (
    <header className="md:text-left text-center pt-[30px] pb-[20px]">
      <h1 className="md:mb-[27px] md:text-[48px] text-[24px] font-bold leading-[40px] mb-[10px]">
        iPhone新機搶先登記
      </h1>
      <h2 className="md:text-black md:text-[24px] text-[14px] text-primaryGray">
        活動日期：即日起 - 9/21
        <span className="md:hidden">(限量預約登記，額滿為止)</span>
      </h2>
      <div className="px-[45px] md:px-0">
        <Hint text="登記的手機號碼需與網購會員手機號碼相同，每會員帳號限預約一支" />
      </div>
    </header>
  );
}

export default Header;
