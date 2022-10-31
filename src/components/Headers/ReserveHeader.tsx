import Logo from "../../images/icons/logo.png";

function ReserveHeader() {
  return (
    <header className='bg-primaryRed pl-[13px] h-[57px] md:h-[82px]'>
      <div className='max-w-[1106px] mx-auto flex items-center h-full'>
        <img src={Logo} alt='Logo圖' />
      </div>
    </header>
  );
}

export default ReserveHeader;
