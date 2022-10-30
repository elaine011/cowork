import Logo from "../../images/icons/logo.png";

function ReserveHeader() {
  return (
    <header className='bg-primaryRed py-[13px] pl-[13px]'>
      <div className='max-w-[1106px] mx-auto'>
        <img src={Logo} alt='Logo圖' />
      </div>
    </header>
  );
}

export default ReserveHeader;
